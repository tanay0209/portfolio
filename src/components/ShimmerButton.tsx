

type props = {
    text: string,
    onClick?: () => {},
    classname?: string
}
function ShimmerButton({ text, onClick, classname = '' }: props) {
    return (
        <button
            className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium transition-colors focus:outline-none focus:ring-0 focus:ring-offset-0 ${classname}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default ShimmerButton
