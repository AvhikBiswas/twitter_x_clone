import React from 'react';
import { TrendingType } from '../Types/TrendingType';

interface TrendingProps {
  item: TrendingType;
}

const Trending: React.FC<TrendingProps> = ({ item }) => {
  return (
    <li key={item.Posts} className="hover:bg-slate-200 pl-4 p-3">
      <div className="trending">
        <div className="font-light text-xs">{item.TrendingCatagory}</div>
        <div className="font-bold text-sm">{item.Tag}</div>
        <div className="font-light text-xs">{item.Posts}</div>
      </div>
    </li>
  );
};

export default Trending;
