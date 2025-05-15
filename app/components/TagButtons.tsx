import { Dispatch, SetStateAction } from "react";

export default function TagButtons({ tags, selectTag, setSelectTag }: { tags: string[], selectTag: string[], setSelectTag: Dispatch<SetStateAction<string[]>> }) {

  return (
    <div className="bg-[#2C2F3A] p-4 rounded-xl text-white">
      <div className="flex justify-center mb-4">
        <button className="px-4 py-2 text-sm border-b-2 border-transparent text-gray-400">שלי</button>
        <button className="px-4 py-2 text-sm border-b-2 border-blue-500 text-blue-400">חיובי</button>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {tags.map((tag) => (
          <button
            onClick={() => {
              if (selectTag.includes(tag)) setSelectTag(selectTag.filter(select => select != tag));
              else
                setSelectTag([...selectTag, tag])
            }}
            key={tag}
            className={`border ${selectTag.includes(tag) ? "border-white" : "border-black"}  text-white text-sm px-4 py-1 rounded-full hover:bg-white hover:text-black transition`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
