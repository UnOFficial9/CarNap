import { useRef, useState } from "react"
import Botapi from "..//..//metadata/telegramBotId.json"
import { Link } from "react-router-dom";
import HomeButton from "./homeBtn";
import { useEffect } from "react";
const OrderCallPage = () => {
    const config = Array.isArray(Botapi) ? Botapi[0] : Botapi;
    const api = config?.api;
    const chatID = config?.chatID;
    const [form, setForm] = useState({ name: '', tel: '', comment: ''})
    const sendToTelegram = async (e: any) => {
        e.preventDefault();
        await fetch(`https://api.telegram.org/bot${api}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatID,
                text: `<b>Замовлення дзвінка від ${form.name}, телефон: <a href='tel:${form.tel}' >${form.tel}</a> Коментар від замовника: ${form.comment}</b>`,
                parse_mode: 'HTML'
            })
        })
        
    }
    useEffect(() => {
            window.scrollTo(0, 0);
        }, [])
    return (
        <div className="w-100 container" style={{
            padding: '10px',
            minHeight: '500px'
        }}>
           <HomeButton />
            <form onSubmit={sendToTelegram}>
                <div className="mb-3">
                    <label className="form-label">Ваше Ім'я</label>
                    <input type="text" className="form-control" placeholder="Наприклад: Антон"
                        onChange={(e) => setForm({ ...form, name: e.target.value })} required style={{ maxWidth: '550px' }} />
                    <div id="emailHelp" className="form-text">Напишіть як Вас звуть</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Ваш номер телефону</label>
                    <input type="tel" className="form-control" placeholder="Наприклад: +38(067) 714 07 47"
                        required onChange={(e) => setForm({ ...form, tel: e.target.value })} style={{ maxWidth: '550px' }} />
                    <div id="emailHelp" className="form-text">Напишіть Ваш номер телефону для зв'язку</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Коментар (необов'язково)</label>
                    <textarea className="form-control"  rows={4} style={{ maxWidth: '550px' }} 
                    onChange={(e) => setForm({ ...form, comment: e.target.value })} placeholder="Опишіть Вашу проблему, або напишіть коли Вам зручно передзвонити"></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Замовити дзвінок</button>
            </form>
        </div>
    )
}
export default OrderCallPage