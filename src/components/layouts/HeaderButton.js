import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
const HeaderButton = () => {

    return (
        <>
            <div className="mx-auto">
                <a href="#about">
                    <div className="see">
                        <FaChevronDown />
                    </div>
                </a>
            </div>
        </>
    )
}

export default HeaderButton
