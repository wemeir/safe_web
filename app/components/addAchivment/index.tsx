import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'

function index() {
    return (
        <div className='flex flex-row justify-center gap-5 w-full h-full'>
            <Button >
                <Link href={"/achivment"}>
                    ההשג שלי
                </Link>
            </Button>
            <Button >
                <Link href={"record"}>
                    הוסף תיעוד <Plus />
                </Link>
            </Button>
        </div>
    )
}

export default index