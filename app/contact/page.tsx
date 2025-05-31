'use client';

import type React from 'react';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
	ArrowLeft,
	Mail,
	Phone,
	MapPin,
	Send,
	Github,
	Linkedin,
	Twitter,
	Sparkles,
	Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 2000));

		// Reset form
		setFormData({ name: '', email: '', subject: '', message: '' });
		setIsSubmitting(false);

		// You would typically send the data to your backend here
		alert("Message sent successfully! I'll get back to you soon.");
	};

	const contactInfo = [
		{
			icon: Mail,
			title: 'Email',
			value: 'john.doe@example.com',
			href: 'mailto:john.doe@example.com',
			color: 'text-purple-400',
			gradient: 'from-purple-500 to-pink-500',
		},
		{
			icon: Phone,
			title: 'Phone',
			value: '+1 (555) 123-4567',
			href: 'tel:+15551234567',
			color: 'text-pink-400',
			gradient: 'from-pink-500 to-red-500',
		},
		{
			icon: MapPin,
			title: 'Location',
			value: 'San Francisco, CA',
			href: '#',
			color: 'text-blue-400',
			gradient: 'from-blue-500 to-cyan-500',
		},
	];

	const socialLinks = [
		{
			icon: Github,
			name: 'GitHub',
			href: 'https://github.com',
			color: 'hover:text-gray-400',
			gradient: 'from-gray-500 to-gray-700',
		},
		{
			icon: Linkedin,
			name: 'LinkedIn',
			href: 'https://linkedin.com',
			color: 'hover:text-blue-400',
			gradient: 'from-blue-500 to-blue-700',
		},
		{
			icon: Twitter,
			name: 'Twitter',
			href: 'https://twitter.com',
			color: 'hover:text-sky-400',
			gradient: 'from-sky-500 to-blue-500',
		},
	];

	// Floating particles for enhanced graphics
	const particles = Array.from({ length: 30 }, (_, i) => ({
		id: i,
		x: Math.random() * 100,
		y: Math.random() * 100,
		size: Math.random() * 3 + 1,
		duration: Math.random() * 15 + 10,
	}));

	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden'>
			{/* Enhanced Animated Background */}
			<div className='fixed inset-0 overflow-hidden pointer-events-none'>
				{/* Floating particles */}
				{particles.map((particle) => (
					<motion.div
						key={particle.id}
						className='absolute bg-white/10 rounded-full'
						style={{
							width: particle.size,
							height: particle.size,
							left: `${particle.x}%`,
							top: `${particle.y}%`,
						}}
						animate={{
							y: [0, -100, 0],
							opacity: [0, 1, 0],
							scale: [0.5, 1, 0.5],
						}}
						transition={{
							duration: particle.duration,
							repeat: Number.POSITIVE_INFINITY,
							ease: 'easeInOut',
						}}
					/>
				))}

				{/* Enhanced gradient orbs */}
				<motion.div
					className='absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl'
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.3, 0.6, 0.3],
						x: [0, 50, 0],
						y: [0, -30, 0],
					}}
					transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
				/>
				<motion.div
					className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl'
					animate={{
						scale: [1.2, 1, 1.2],
						opacity: [0.4, 0.7, 0.4],
						x: [0, -40, 0],
						y: [0, 40, 0],
					}}
					transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
				/>
				<motion.div
					className='absolute top-3/4 left-3/4 w-48 h-48 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-2xl'
					animate={{
						scale: [0.8, 1.3, 0.8],
						opacity: [0.2, 0.5, 0.2],
						rotate: [0, 180, 360],
					}}
					transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
				/>

				{/* Geometric shapes */}
				<motion.div
					className='absolute top-20 right-20 w-20 h-20 border-2 border-purple-400/30'
					animate={{
						rotate: [0, 360],
						scale: [1, 1.2, 1],
					}}
					transition={{
						duration: 15,
						repeat: Number.POSITIVE_INFINITY,
						ease: 'linear',
					}}
				/>
				<motion.div
					className='absolute bottom-32 left-32 w-16 h-16 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full'
					animate={{
						scale: [1, 1.5, 1],
						opacity: [0.3, 0.8, 0.3],
						y: [0, -20, 0],
					}}
					transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
				/>
			</div>

			{/* Enhanced Navigation */}
			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				className='fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10'>
				<div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
					<Link href='/'>
						<motion.div
							whileHover={{ scale: 1.05 }}
							className='text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative'>
							Portfolio
							<motion.div
								className='absolute -inset-2 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-lg blur-lg'
								animate={{ opacity: [0, 0.5, 0] }}
								transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
							/>
						</motion.div>
					</Link>
					<Link href='/'>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Button
								variant='ghost'
								className='text-white hover:text-purple-400 relative group'>
								<motion.div className='absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
								<ArrowLeft className='w-4 h-4 mr-2 relative z-10' />
								<span className='relative z-10'>Back to Home</span>
							</Button>
						</motion.div>
					</Link>
				</div>
			</motion.nav>

			<div className='pt-24 pb-12 px-6 relative z-10'>
				<div className='max-w-6xl mx-auto'>
					{/* Enhanced Header */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className='text-center mb-16 relative'>
						<motion.div
							className='absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl'
							animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
							transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
						/>
						<h1 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative z-10'>
							Get in Touch
							<motion.div className='inline-block ml-4'>
								<Sparkles className='w-12 h-12 text-yellow-400' />
							</motion.div>
						</h1>
						<p className='text-xl text-gray-300 max-w-3xl mx-auto relative z-10'>
							Have a project in mind? Let's discuss how we can work together to
							bring your ideas to life.
						</p>
					</motion.div>

					<div className='grid lg:grid-cols-2 gap-12'>
						{/* Enhanced Contact Form */}
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className='relative'>
							<motion.div
								className='absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur-xl'
								animate={{ opacity: [0.5, 1, 0.5] }}
								transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
							/>
							<Card className='bg-white/5 border-white/10 backdrop-blur-lg relative z-10'>
								<CardHeader>
									<CardTitle className='text-2xl font-bold text-white flex items-center'>
										<Zap className='w-6 h-6 mr-2 text-yellow-400' />
										Send me a message
									</CardTitle>
								</CardHeader>
								<CardContent>
									<form onSubmit={handleSubmit} className='space-y-6'>
										<div className='grid md:grid-cols-2 gap-4'>
											<motion.div
												className='space-y-2'
												whileHover={{ scale: 1.02 }}>
												<Label htmlFor='name' className='text-white'>
													Name
												</Label>
												<Input
													id='name'
													name='name'
													value={formData.name}
													onChange={handleInputChange}
													placeholder='Your full name'
													required
													className='bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 transition-all duration-300'
												/>
											</motion.div>
											<motion.div
												className='space-y-2'
												whileHover={{ scale: 1.02 }}>
												<Label htmlFor='email' className='text-white'>
													Email
												</Label>
												<Input
													id='email'
													name='email'
													type='email'
													value={formData.email}
													onChange={handleInputChange}
													placeholder='your.email@example.com'
													required
													className='bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 transition-all duration-300'
												/>
											</motion.div>
										</div>

										<motion.div
											className='space-y-2'
											whileHover={{ scale: 1.02 }}>
											<Label htmlFor='subject' className='text-white'>
												Subject
											</Label>
											<Input
												id='subject'
												name='subject'
												value={formData.subject}
												onChange={handleInputChange}
												placeholder="What's this about?"
												required
												className='bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 transition-all duration-300'
											/>
										</motion.div>

										<motion.div
											className='space-y-2'
											whileHover={{ scale: 1.02 }}>
											<Label htmlFor='message' className='text-white'>
												Message
											</Label>
											<Textarea
												id='message'
												name='message'
												value={formData.message}
												onChange={handleInputChange}
												placeholder='Tell me about your project...'
												rows={6}
												required
												className='bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 resize-none transition-all duration-300'
											/>
										</motion.div>

										<motion.div
											whileHover={{ scale: 1.02 }}
											whileTap={{ scale: 0.98 }}>
											<Button
												type='submit'
												disabled={isSubmitting}
												className='w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 relative overflow-hidden group'>
												<motion.div
													className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent'
													initial={{ x: '-100%' }}
													whileHover={{ x: '100%' }}
													transition={{ duration: 0.5 }}
												/>
												{isSubmitting ? (
													<motion.div
														animate={{ rotate: 360 }}
														transition={{
															duration: 1,
															repeat: Number.POSITIVE_INFINITY,
															ease: 'linear',
														}}
														className='w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2 relative z-10'
													/>
												) : (
													<Send className='w-5 h-5 mr-2 relative z-10' />
												)}
												<span className='relative z-10'>
													{isSubmitting ? 'Sending...' : 'Send Message'}
												</span>
											</Button>
										</motion.div>
									</form>
								</CardContent>
							</Card>
						</motion.div>

						{/* Enhanced Contact Information */}
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className='space-y-8'>
							{/* Enhanced Contact Info Cards */}
							<div className='space-y-6'>
								<h3 className='text-2xl font-bold text-white mb-6 flex items-center'>
									<Mail className='w-6 h-6 mr-2 text-purple-400' />
									Contact Information
								</h3>
								{contactInfo.map((info, index) => (
									<motion.a
										key={info.title}
										href={info.href}
										whileHover={{ scale: 1.02, x: 10 }}
										className='block'
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: index * 0.1 }}>
										<Card className='bg-white/5 border-white/10 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 relative overflow-hidden group'>
											<motion.div
												className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
											/>
											<CardContent className='p-6 flex items-center space-x-4 relative z-10'>
												<motion.div
													className={`p-3 rounded-full bg-white/10 ${info.color} relative`}
													whileHover={{ rotate: 360 }}
													transition={{ duration: 0.5 }}>
													<info.icon className='w-6 h-6' />
													<motion.div
														className='absolute inset-0 bg-white/20 rounded-full'
														animate={{
															scale: [1, 1.2, 1],
															opacity: [0, 0.5, 0],
														}}
														transition={{
															duration: 2,
															repeat: Number.POSITIVE_INFINITY,
														}}
													/>
												</motion.div>
												<div>
													<h4 className='font-semibold text-white'>
														{info.title}
													</h4>
													<p className='text-gray-300'>{info.value}</p>
												</div>
											</CardContent>
										</Card>
									</motion.a>
								))}
							</div>

							{/* Enhanced Social Links */}
							<Card className='bg-white/5 border-white/10 backdrop-blur-lg relative overflow-hidden'>
								<motion.div
									className='absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10'
									animate={{ opacity: [0.3, 0.6, 0.3] }}
									transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
								/>
								<CardHeader className='relative z-10'>
									<CardTitle className='text-xl font-bold text-white flex items-center'>
										<Sparkles className='w-5 h-5 mr-2 text-yellow-400' />
										Follow Me
									</CardTitle>
								</CardHeader>
								<CardContent className='relative z-10'>
									<div className='flex space-x-4'>
										{socialLinks.map((social, index) => (
											<motion.a
												key={social.name}
												href={social.href}
												target='_blank'
												rel='noopener noreferrer'
												whileHover={{ scale: 1.1, y: -2, rotate: 5 }}
												whileTap={{ scale: 0.95 }}
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ delay: index * 0.1 }}
												className={`p-3 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 ${social.color} relative group overflow-hidden`}>
												<motion.div
													className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
												/>
												<social.icon className='w-6 h-6 relative z-10' />
											</motion.a>
										))}
									</div>
									<p className='text-gray-400 text-sm mt-4'>
										Connect with me on social media for updates and
										behind-the-scenes content.
									</p>
								</CardContent>
							</Card>

							{/* Enhanced Availability */}
							<Card className='bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20 backdrop-blur-lg relative overflow-hidden'>
								<motion.div
									className='absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10'
									animate={{ opacity: [0.3, 0.7, 0.3] }}
									transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
								/>
								<CardContent className='p-6 relative z-10'>
									<div className='flex items-center space-x-3 mb-3'>
										<motion.div
											className='w-3 h-3 bg-green-400 rounded-full'
											animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
											transition={{
												duration: 1.5,
												repeat: Number.POSITIVE_INFINITY,
											}}
										/>
										<h4 className='font-semibold text-white'>
											Available for Projects
										</h4>
									</div>
									<p className='text-gray-300 text-sm'>
										I'm currently accepting new projects and collaborations.
										Let's create something amazing together!
									</p>
								</CardContent>
							</Card>
						</motion.div>
					</div>

					{/* Enhanced FAQ Section */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className='mt-20'>
						<h3 className='text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
							Frequently Asked Questions
						</h3>
						<div className='grid md:grid-cols-2 gap-6'>
							{[
								{
									question: "What's your typical response time?",
									answer:
										'I usually respond to emails within 24 hours during business days.',
									icon: '⚡',
								},
								{
									question: 'Do you work with international clients?',
									answer:
										'Yes! I work with clients from all around the world and across different time zones.',
									icon: '🌍',
								},
								{
									question: "What's your project timeline?",
									answer:
										"Project timelines vary depending on scope and complexity. I'll provide a detailed timeline during our initial consultation.",
									icon: '📅',
								},
								{
									question: 'Do you offer ongoing support?',
									answer:
										'Yes, I provide ongoing maintenance and support packages for all completed projects.',
									icon: '🛠️',
								},
							].map((faq, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
									whileHover={{ scale: 1.02, y: -2 }}>
									<Card className='bg-white/5 border-white/10 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 relative overflow-hidden group'>
										<motion.div className='absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
										<CardContent className='p-6 relative z-10'>
											<div className='flex items-start space-x-3'>
												<motion.span
													className='text-2xl'
													animate={{ rotate: [0, 10, -10, 0] }}
													transition={{
														duration: 2,
														repeat: Number.POSITIVE_INFINITY,
														delay: index * 0.2,
													}}>
													{faq.icon}
												</motion.span>
												<div>
													<h4 className='font-semibold text-white mb-2'>
														{faq.question}
													</h4>
													<p className='text-gray-300 text-sm'>{faq.answer}</p>
												</div>
											</div>
										</CardContent>
									</Card>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
