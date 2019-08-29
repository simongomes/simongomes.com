import React from "react";
import Link from "next/link";
import "../src/scss/styles.scss";

const Header = () => {
    return (
        <>
            <header className="site-header">
                <div className="header-wrap">
                    <Link href="/">
                        <a className="logo">&lt;simon-gomes/&gt;</a>
                    </Link>
                </div>
            </header>
        </>
    );
};

export default Header;
