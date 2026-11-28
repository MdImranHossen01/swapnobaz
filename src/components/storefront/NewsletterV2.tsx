'use client';

import { useState, useEffect } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import dynamic from 'next/dynamic';

const Threads = dynamic(() => import('@/components/ui/Threads'), { ssr: false });

export function NewsletterV2({ layout }: { layout?: string }) {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [subscribed, setSubscribed] = useState(false);

    useEffect(() => {
        const isSubscribed = localStorage.getItem('newsletter_subscribed');
        if (isSubscribed === 'true') {
            setSubscribed(true);
        }
    }, []);

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setLoading(true);
        try {
            const res = await fetch('/api/newsletter/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (res.ok) {
                setSubscribed(true);
                toast.success("Thank you for subscribing! Welcome to the Swapnobaz community.");
                localStorage.setItem('newsletter_subscribed', 'true');
            } else {
                toast.error(data.message || "Failed to subscribe. Please try again.");
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className={`py-10 bg-primary text-white relative overflow-hidden ${layout === 'v3' ? 'lg:rounded-sm lg:py-8' : ''}`}>
            {/* Dark gradient overlay for the professional gradient look */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40 pointer-events-none" />

            {/* Threads animated background */}
            <div className="absolute inset-0 opacity-100 mix-blend-screen">
                <Threads
                    color={[1, 1, 1]}
                    amplitude={3}
                    distance={0}
                    enableMouseInteraction={true}
                />
            </div>
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">

                    {/* Left Side: Content */}
                    <div className="flex-1 text-center md:text-left space-y-4">
                        <div className="space-y-1.5">
                            <p className="text-[11px] font-black tracking-[0.2em] uppercase opacity-70">
                                Our Newsletter
                            </p>
                            <h2 className={`text-4xl ${layout === 'v3' ? 'lg:text-2xl' : 'md:text-5xl'} font-black tracking-tighter italic leading-none`}>
                                BE THE FIRST TO KNOW!
                            </h2>
                            <p className={`text-sm ${layout === 'v3' ? 'lg:text-xs' : 'md:text-base'} font-semibold text-white/95 pt-1`}>
                                Get exclusive deals, new arrivals, and special offers from Swapnobaz.
                            </p>
                        </div>
                        <p className={`text-lg ${layout === 'v3' ? 'lg:text-sm' : 'md:text-xl'} font-medium text-white/90`}>
                            Be part of our community and receive handpicked products, exciting offers, and the latest updates directly in your inbox.
                        </p>
                        <p className="hidden md:block text-[11px] font-bold tracking-wider text-white/60">
                            No spam • Unsubscribe anytime • Privacy protected
                        </p>
                    </div>

                    {/* Right Side: Form */}
                    <div className={`w-full md:w-auto ${layout === 'v3' ? 'lg:min-w-[340px] lg:max-w-[340px]' : 'md:min-w-[440px]'}`}>
                        {subscribed ? (
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center gap-4 animate-in fade-in zoom-in duration-500">
                                <div className="bg-white rounded-full p-2 text-primary">
                                    <CheckCircle2 className="size-6" />
                                </div>
                                <div className="text-left">
                                    <p className="font-bold">Thank you for subscribing!</p>
                                    <p className="text-xs text-white/80">Welcome to the Swapnobaz community.</p>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubscribe} className="w-full space-y-1.5">
                                <label htmlFor="newsletter-email" className="block text-xs font-semibold text-white/85 pl-1">
                                    Your Email Address
                                </label>
                                <div className="flex flex-col gap-2.5 sm:block sm:relative group">
                                    <Input
                                        id="newsletter-email"
                                        type="email"
                                        placeholder="Enter your email address"
                                        className={`h-12 sm:h-14 px-4 ${layout === 'v3' ? 'sm:pl-4 sm:pr-40 lg:h-11 lg:text-sm lg:pl-4 lg:pr-36' : 'sm:pl-6 sm:pr-44'} w-full rounded-xl bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white/30 transition-all text-sm sm:text-base`}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <div className={`sm:absolute sm:right-1.5 sm:top-1.5 ${layout === 'v3' ? 'lg:right-1 lg:top-1' : ''}`}>
                                        <Button
                                            type="submit"
                                            className={`w-full sm:w-auto h-11 px-5 rounded-lg bg-white text-black hover:bg-white/90 font-black text-xs uppercase tracking-widest gap-2 shadow-lg ${layout === 'v3' ? 'lg:h-9 lg:px-3 lg:text-[10px]' : ''}`}
                                            disabled={loading}
                                        >
                                            {loading ? (
                                                <Loader2 className="size-4 animate-spin" />
                                            ) : (
                                                <>SUBSCRIBE NOW <Send className="size-3" /></>
                                            )}
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        )}
                        <p className="md:hidden mt-4 text-[11px] font-bold tracking-wider text-white/60 text-center">
                            No spam • Unsubscribe anytime • Privacy protected
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

