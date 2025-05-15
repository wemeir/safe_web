import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'

function index() {
    return (
        <div className='flex flex-row justify-center gap-5 w-full h-full'>
            <Button variant="ghost"
                className="text-white border border-white rounded-full px-4 py-1 h-auto hover:bg-white/10 flex flex-row-reverse gap-2"
            >
                <Link href={"/achivment"}>
                    ההשג שלי
                </Link>
            </Button>
            <Button variant="ghost"
                className=" text-white border border-white rounded-full px-4 py-1 h-auto hover:bg-white/10 flex flex-row-reverse gap-2">
                <Link href={"record"} className='flex flex-row content-center'>
                <div>
                    הוסף תיעוד 
                </div>
                    <Plus />
                </Link>
            </Button>
        </div>
    )
}

export default index