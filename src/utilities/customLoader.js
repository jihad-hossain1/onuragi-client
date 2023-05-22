// import { useEffect, useState } from "react";

const customeLoaderOne = async () => {
    const loaddedToysOne = await fetch()
    const loaddedToysTwo = await fetch()
    const categoryToysOne = await loaddedToysOne.json()
    const categoryToysTwo = await loaddedToysTwo.json()


    return { categoryToysOne, categoryToysTwo }
}

export default customeLoaderOne



