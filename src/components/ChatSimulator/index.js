import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import userAvatar from '../../assets/hackers.webp'; // Ajuste o caminho se necessário

const ChatContainer = styled.div`
    background-color: #1E2028;
    padding: 15px;
    border-radius: 10px;
    font-size: 16px;
    margin-top: 20px;
    line-height: 1.6;
    position: relative;
`;

const UserAvatar = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: url(${userAvatar});
    background-position: center; // Centraliza a imagem
    background-size: cover; // Garante que a imagem cubra todo o espaço do div
    position: absolute;
    top: 10px;
    left: 10px;
`;

const Messages = [
    "Você vai clicar nesse botão (WHATSAPP DE INDICAÇÃO) e segurar, logo após aparecerá a opção de enviar para quem você quiser🥳🤑",
    "Digitando...",
    "A cada 2 pessoas que você indicar o aplicativo você já garante seus 30 reais, se indicar 10 pessoas você recebe 180 reais na sua conta 💰",
    "Digitando..."
];

const Intervals = [9000, 3000, 9000, 3000]; // 9 segundos para mensagens completas e 1 segundo para "Digitando..."

const ChatSimulator = () => {
    const [currentMessage, setCurrentMessage] = useState(0);

    useEffect(() => {
        const changeMessage = () => {
            setCurrentMessage((prev) => (prev + 1) % Messages.length);
        };

        const interval = setInterval(changeMessage, Intervals[currentMessage]);

        return () => {
            clearInterval(interval);
        };
    }, [currentMessage]); // Observamos a mudança em currentMessage

    return (
        <ChatContainer>
            <UserAvatar />
            <div style={{ paddingLeft: '60px' }}>{Messages[currentMessage]}</div>
        </ChatContainer>
    );
}

export default ChatSimulator;