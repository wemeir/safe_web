import Image from "next/image"

export default function TitleChat() {
  return (
    <div className="flex items-center justify-center bg-[#1f2937]">
      <div className="flex items-center justify-end gap-3 text-white px-4 py-2 rounded-lg">
        <span className="text-lg font-semibold">עו״ס אביב AI</span>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
          <Image
            src="/next.svg"
            alt="avatar"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  )
}
