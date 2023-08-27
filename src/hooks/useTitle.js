import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Chef Hunter`
    }, [title])
}

export default useTitle;