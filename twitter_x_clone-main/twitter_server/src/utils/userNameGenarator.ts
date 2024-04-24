export default function userNameGenarator(firstName: string) {
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  return '@'+ firstName + randomNumber.toString();
}
