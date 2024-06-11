
import styles from './styles.module.css';

const Search = ({keywords, setKeywords}) => {
    return (
        <div>
            <input
                className={styles.input}
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}/>
        </div>
    )
}

export default Search

// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/y3K4X5a88Xb
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
//
// export default function Component() {
//     return (
//         <div className="flex items-center max-w-md w-full">
//             <Input
//                 type="search"
//                 placeholder="Search..."
//                 className="flex-1 rounded-l-md border-r-0 focus:ring-0 focus:border-gray-400"
//             />
//             <Button variant="default" className="rounded-r-md border-l-0 hover:bg-gray-100 dark:hover:bg-gray-800">
//                 <SearchIcon className="h-5 w-5" />
//                 <span className="sr-only">Search</span>
//             </Button>
//         </div>
//     )
// }
//
// function SearchIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <circle cx="11" cy="11" r="8" />
//             <path d="m21 21-4.3-4.3" />
//         </svg>
//     )
// }