import { useEffect } from 'react';
import CardPageContent from '../../metadata/chapters.json'
import HomeButton from './homeBtn';
import { Link } from 'react-router-dom';


const CardPage = (props: { id: any }) => {
    let description = '', image = '', list: string[] = [], videoUrl: any;
    CardPageContent.map((c: any) => {
        if (c.url == props.id) {
            description = c.text;
            image = c.cardPageImage;
            list = c.cardPageList
            videoUrl = c.videoUrl;
        }
    })
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="w-100 container " style={{
            padding: '10px',
        }}>
            <HomeButton />
            <div className="p-3 mb-2 bg-light border rounded align-items-start d-flex flex-column justify-content-between"
                style={{
                    minHeight: '500px',
                    maxHeight: '5000px'
                }}
            >

                {image.length > 0 ? (<img src={image} alt="Картинки нема." style={{
                    maxWidth: '80%',
                    maxHeight: '500px',

                }}></img>): null}
                <p style={{
                    fontSize: '1.3rem',
                    paddingLeft: '12px',
                    whiteSpace: 'pre-line'

                }}>{description}</p>

                {videoUrl?.length > 0 ? (<iframe src={videoUrl} className="ratio ratio-16x9" style={{
                width: "100%",
                minHeight: "90vh",
                height: "max-content",
                objectFit: "contain",
                overflow: "hidden",
                
                margin: '0 auto'
            }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen> </iframe>):null

        }

            </div >

            <ul style={{
                fontSize: '1.3rem',
                marginLeft: '25px',
                paddingBlock: '15px',

            }}>

                {list?.map((c: any) => (
                    <li>{c}</li>
                ))}
            </ul>
            
            
            <Link to={"/orderCall"} style={{display: 'flex', justifyContent: 'center' }}>
                <h2 style={{
                    color: 'white',            // Колір тексту
                    backgroundColor: 'red',    // Колір фону
                    padding: '12px 30px',      // Відступи всередині (висота та ширина кнопки)
                    borderRadius: '8px',       // Закруглення кутів
                    textAlign: 'center',       // Текст по центру
                    fontSize: '1.5rem',        // Розмір шрифту
                    fontWeight: 'bold',        // Жирний шрифт
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)', // Легка тінь для об'єму
                    marginTop: '30px',         // Відступ зверху
                    cursor: 'pointer'          // Курсор при наведенні
                }}>
                    Записатися зараз
                </h2>
            </Link>
        </div>
    )

}
export default CardPage