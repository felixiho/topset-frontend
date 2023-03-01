export type PaginatorProps = {
    setPage: (page: number) => void
    disabled: boolean
    page: number
    maxPage: number
}

const Paginator = ({
    setPage, disabled, page, maxPage
}: PaginatorProps) => {
 
    const handlePage = (page: number) => {
        if (page < 1 || page > maxPage) return 
        setPage(page)
    }
    return (
        <section className=""  >
            <span onClick={() => handlePage(page-1)} className={`${(page === 1 || disabled) ? " cursor-not-allowed " : " cursor-pointer "}  text-white text-sm mt-2 mx-4 bg-topset-100 border rounded-full py-1 px-4`}>Back</span>
             <span>{page}</span>       
             <span  onClick={() => handlePage(page+1)} className={`${(page === maxPage || disabled) ? " cursor-not-allowed " : " cursor-pointer "}  text-white text-sm mt-2 mx-4 bg-topset-100 border rounded-full py-1 px-4`}>Next</span>
        </section>
    )
}

export default Paginator