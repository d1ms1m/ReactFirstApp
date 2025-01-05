import {useTranslation} from "react-i18next";

const HomePage = () => {
    const {t} = useTranslation('home');
    return (
        <div>
            <h1>{t('Title')}</h1>
        </div>
    );
};

export default HomePage;