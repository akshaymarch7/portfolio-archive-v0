import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoProps {
    title: string;
    description: string;
    type?: string;
    name?: string;
    keywords?: string[];
}

export const Seo: React.FC<SeoProps> = ({
    title,
    description,
    type = 'website',
    name = 'Akshay Saini',
    keywords = []
}) => {
    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords.join(', ')} />

            {/* End standard metadata tags */}

            {/* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {/* End Facebook tags */}

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {/* End Twitter tags */}
        </Helmet>
    );
};
