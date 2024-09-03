import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('О сайте')}
            <p>Fsfgresgsdr</p>
        </div>
    );
};

export default AboutPage;
