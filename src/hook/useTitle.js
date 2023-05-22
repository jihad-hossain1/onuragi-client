import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} | Animal Kidol`;
    }, [title])
}

export default useTitle;