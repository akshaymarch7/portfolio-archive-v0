import React, { useEffect, useState } from 'react';
import { Seo } from '../SEO/Seo';

interface Video {
    title: string;
    link: string;
    thumbnail: string;
    pubDate: string;
}

const CHANNEL_ID = 'UC3N9i_KvKZYP4F84FPIzgPQ';
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

export const VideosTab: React.FC = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                if (data.items) {
                    setVideos(data.items);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch videos", err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="p-6 h-full overflow-y-auto bg-vscode-bg font-sans">
            <Seo
                title="Videos - Akshay Saini"
                description="Watch the latest software engineering tutorials and talks by Akshay Saini."
                keywords={['YouTube', 'Videos', 'Tutorials', 'Akshay Saini']}
            />
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-vscode-text">Latest Videos from YouTube - <a className="underline" href="https://www.youtube.com/@akshaysaini" target="_blank" rel="noreferrer">Akshay Saini</a></h2>
            </div>

            {loading ? (
                <div className="text-vscode-text opacity-50">Loading videos...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {videos.map((vid, idx) => (
                        <a
                            key={idx}
                            href={vid.link}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-vscode-sidebar hover:bg-vscode-lineHighlight transition-colors rounded-lg overflow-hidden border border-vscode-activity group cursor-pointer block"
                        >
                            <div className="relative aspect-video">
                                <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="p-3">
                                <h3 className="font-medium text-vscode-text group-hover:text-vscode-accent transition-colors text-sm line-clamp-2" title={vid.title}>{vid.title}</h3>
                                <div className="flex items-center justify-between mt-2 text-xs text-vscode-text opacity-60">
                                    <span>{new Date(vid.pubDate).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};
