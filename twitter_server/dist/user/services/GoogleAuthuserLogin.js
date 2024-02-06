"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function GoogleAuthuserLogin(token) {
    return __awaiter(this, void 0, void 0, function* () {
        const endpointUrl = process.env.GOOGLE_AUTH;
        if (!endpointUrl) {
            console.error("GOOGLE_AUTH environment variable is not set");
            return false;
        }
        try {
            const { data } = yield axios_1.default.get(endpointUrl, {
                params: {
                    id_token: token,
                },
                responseType: "json"
            });
            const userData = {
                userName: data.given_name,
                firstName: data.name,
                lastName: data.family_name,
                email: data.email,
                profileImg: data.picture
            };
            return userData;
        }
        catch (error) {
            console.error("Error from Google Auth Service", error);
            return false;
        }
    });
}
exports.default = GoogleAuthuserLogin;
