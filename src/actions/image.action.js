const images = [
    {
        img: process.env.PUBLIC_URL + "../images/image01.png"
    },
    {
        img: process.env.PUBLIC_URL + "../images/image02.png"
    },
    {
        img: process.env.PUBLIC_URL + "../images/image03.png"
    },
    {
        img: process.env.PUBLIC_URL + "../images/image04.png"
    },
    {
        img: process.env.PUBLIC_URL + "../images/image05.png"
    },
    {
        img: process.env.PUBLIC_URL + "../images/image06.png"
    },
    {
        img: process.env.PUBLIC_URL + "../images/image07.png"
    },
    {
        img: process.env.PUBLIC_URL + "../images/image08.png"
    },
    {
        img: process.env.PUBLIC_URL + "../images/image09.png"
    },
    {
        img: process.env.PUBLIC_URL + "../images/image10.png"
    },
    {
        img: process.env.PUBLIC_URL + "../images/image11.png"
    },
    {
        img: process.env.PUBLIC_URL + "../images/image12.png"
    },
]
export async function getImages() {
    return images;
}