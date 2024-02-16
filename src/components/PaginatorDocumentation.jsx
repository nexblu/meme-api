import Documentation from "./Documentation";

const PaginatorDocumentation = (prop) => {
    let { page } = prop;
    if (page === 1) {
        return (
            <Documentation type={'meme'}/>
        )
    } else {
        return (
            <Documentation type={'joke'}/>
        )
    }
};

export default PaginatorDocumentation;
