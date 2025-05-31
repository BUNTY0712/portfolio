'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
	ArrowDown,
	Github,
	Linkedin,
	Mail,
	ExternalLink,
	Users,
	Star,
	Award,
	Coffee,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function PersonalWebsite() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const { scrollYProgress } = useScroll();
	const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
	const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

	// Smooth spring animations
	const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
	const x = useSpring(0, springConfig);
	const ySpring = useSpring(0, springConfig);

	useEffect(() => {
		const updateMousePosition = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
			x.set(e.clientX);
			ySpring.set(e.clientY);
		};
		window.addEventListener('mousemove', updateMousePosition);
		return () => window.removeEventListener('mousemove', updateMousePosition);
	}, [x, ySpring]);

	const skills = [
		{ name: 'React', level: 95, icon: '⚛️' },
		{ name: 'TypeScript', level: 90, icon: '📘' },
		{ name: 'Next.js', level: 88, icon: '▲' },
		{ name: 'Node.js', level: 85, icon: '🟢' },
		{ name: 'Python', level: 80, icon: '🐍' },
		{ name: 'UI/UX Design', level: 75, icon: '🎨' },
	];

	const projects = [
		{
			title: 'E-Commerce Platform',
			description:
				'Full-stack e-commerce solution with React, Node.js, and Stripe integration',
			image: '/placeholder.svg?height=300&width=500',
			tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
			github: '#',
			live: '#',
			gradient: 'from-purple-500 to-pink-500',
		},
		{
			title: 'AI Dashboard',
			description:
				'Analytics dashboard with AI-powered insights and real-time data visualization',
			image: '/placeholder.svg?height=300&width=500',
			tech: ['Next.js', 'Python', 'TensorFlow', 'D3.js'],
			github: '#',
			live: '#',
			gradient: 'from-blue-500 to-cyan-500',
		},
		{
			title: 'Mobile App',
			description:
				'Cross-platform mobile application for task management and productivity',
			image: '/placeholder.svg?height=300&width=500',
			tech: ['React Native', 'Firebase', 'Redux'],
			github: '#',
			live: '#',
			gradient: 'from-green-500 to-emerald-500',
		},
	];

	const achievements = [
		{ icon: Star, count: '50+', label: 'Projects', color: 'text-yellow-400' },
		{ icon: Users, count: '30+', label: 'Clients', color: 'text-blue-400' },
		{ icon: Award, count: '15+', label: 'Awards', color: 'text-purple-400' },
		{
			icon: Coffee,
			count: '1000+',
			label: 'Coffees',
			color: 'text-orange-400',
		},
	];

	// Floating particles animation
	const particles = Array.from({ length: 50 }, (_, i) => ({
		id: i,
		x: Math.random() * 100,
		y: Math.random() * 100,
		size: Math.random() * 4 + 1,
		duration: Math.random() * 20 + 10,
	}));

	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative'>
			{/* Enhanced Animated Background */}
			<div className='fixed inset-0 overflow-hidden pointer-events-none'>
				{/* Main mouse follower */}
				<motion.div
					className='absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl'
					style={{
						left: mousePosition.x - 192,
						top: mousePosition.y - 192,
						transition: 'all 0.3s ease',
					}}
				/>

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
						}}
						transition={{
							duration: particle.duration,
							repeat: Number.POSITIVE_INFINITY,
							ease: 'easeInOut',
						}}
					/>
				))}

				{/* Gradient orbs */}
				<div className='absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse' />
				<div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-2xl animate-pulse delay-1000' />
				<div className='absolute top-3/4 left-1/2 w-48 h-48 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse delay-500' />

				{/* Geometric shapes */}
				<motion.div
					className='absolute top-20 right-20 w-20 h-20 border border-purple-400/30 rotate-45'
					animate={{ rotate: [45, 405] }}
					transition={{
						duration: 20,
						repeat: Number.POSITIVE_INFINITY,
						ease: 'linear',
					}}
				/>
				<motion.div
					className='absolute bottom-20 left-20 w-16 h-16 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full'
					animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
					transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
				/>
			</div>

			{/* Enhanced Navigation */}
			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				className='fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10'>
				<div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
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
					<div className='hidden md:flex space-x-8'>
						{[
							{ name: 'About', href: '#about' },
							{ name: 'Skills', href: '#skills' },
							{ name: 'Projects', href: '#projects' },
							{ name: 'Contact', href: '/contact' },
						].map((item, index) => (
							<motion.a
								key={item.name}
								href={item.href}
								whileHover={{ scale: 1.1, y: -2 }}
								className='hover:text-purple-400 transition-colors relative group'
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}>
								{item.name}
								<motion.div className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300' />
							</motion.a>
						))}
					</div>
				</div>
			</motion.nav>

			{/* Enhanced Hero Section */}
			<section className='min-h-screen flex items-center justify-center relative'>
				<motion.div
					style={{ y, opacity, scale }}
					className='text-center z-10 relative'>
					{/* Glowing background effect */}
					<motion.div
						className='absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl'
						animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
						transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
					/>

					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}>
						<motion.h1
							className='text-6xl md:text-8xl font-bold mb-6 relative'
							whileHover={{ scale: 1.05 }}>
							<span className='bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent relative'>
								Suraj Kr Mahato
								<motion.div
									className='absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-20 blur-2xl'
									animate={{ opacity: [0.2, 0.4, 0.2] }}
									transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
								/>
							</span>
						</motion.h1>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5 }}
							className='flex justify-center mb-6'>
							{['💻', '🎨', '⚡', '🚀'].map((emoji, index) => (
								<motion.span
									key={index}
									className='text-4xl mx-2'
									animate={{
										y: [0, -10, 0],
										rotate: [0, 10, -10, 0],
									}}
									transition={{
										duration: 2,
										delay: index * 0.2,
										repeat: Number.POSITIVE_INFINITY,
									}}>
									{emoji}
								</motion.span>
							))}
						</motion.div>

						<p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto'>
							Full-Stack Developer & UI/UX Designer crafting digital experiences
							that matter
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Button
								size='lg'
								className='bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 relative overflow-hidden group'>
								<motion.div
									className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent'
									initial={{ x: '-100%' }}
									whileHover={{ x: '100%' }}
									transition={{ duration: 0.5 }}
								/>
								View My Work
							</Button>
						</motion.div>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Button
								size='lg'
								variant='outline'
								className='border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white relative overflow-hidden group'>
								<motion.div
									className='absolute inset-0 bg-purple-400'
									initial={{ scale: 0 }}
									whileHover={{ scale: 1 }}
									transition={{ duration: 0.3 }}
								/>
								<span className='relative z-10'>Download CV</span>
							</Button>
						</motion.div>
					</motion.div>

					<motion.div
						animate={{ y: [0, 10, 0] }}
						transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
						className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
						<ArrowDown className='w-6 h-6 text-purple-400' />
					</motion.div>
				</motion.div>
			</section>

			{/* Enhanced About Section */}
			<section id='about' className='py-20 px-6 relative'>
				<div className='max-w-6xl mx-auto'>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className='text-center mb-16'>
						<h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
							About Me
						</h2>
						<p className='text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed'>
							I'm a passionate developer with 5+ years of experience creating
							innovative web applications and user interfaces. I love turning
							complex problems into simple, beautiful designs that provide
							exceptional user experiences.
						</p>
					</motion.div>

					<div className='grid md:grid-cols-2 gap-12 items-center'>
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className='relative'>
							<motion.div
								className='absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-2xl'
								animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
								transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
							/>
							<img
								src='/Image/suraj.jpeg'
								alt='Profile'
								className='rounded-2xl shadow-2xl w-full max-w-md mx-auto relative z-10'
							/>
							<motion.div
								className='absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center z-20'
								animate={{ rotate: [0, 360] }}
								transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}>
								⭐
							</motion.div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className='space-y-6'>
							<div className='grid grid-cols-2 gap-6'>
								{achievements.map((achievement, index) => (
									<motion.div
										key={achievement.label}
										initial={{ opacity: 0, scale: 0.8 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										viewport={{ once: true }}
										whileHover={{ scale: 1.05, y: -5 }}>
										<Card className='bg-white/5 border-white/10 backdrop-blur-lg relative overflow-hidden group'>
											<motion.div
												className='absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10'
												initial={{ opacity: 0 }}
												whileHover={{ opacity: 1 }}
												transition={{ duration: 0.3 }}
											/>
											<CardContent className='p-6 text-center relative z-10'>
												<achievement.icon
													className={`w-8 h-8 ${achievement.color} mx-auto mb-2`}
												/>
												<motion.h3
													className='font-semibold text-white text-2xl'
													initial={{ scale: 1 }}
													whileInView={{ scale: [1, 1.2, 1] }}
													transition={{ duration: 0.5, delay: index * 0.1 }}
													viewport={{ once: true }}>
													{achievement.count}
												</motion.h3>
												<p className='text-gray-400 text-sm'>
													{achievement.label}
												</p>
											</CardContent>
										</Card>
									</motion.div>
								))}
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Enhanced Skills Section */}
			<section id='skills' className='py-20 px-6 bg-black/20 relative'>
				<div className='max-w-6xl mx-auto'>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className='text-center mb-16'>
						<h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
							Skills & Expertise
						</h2>
					</motion.div>

					<div className='grid md:grid-cols-2 gap-8'>
						{skills.map((skill, index) => (
							<motion.div
								key={skill.name}
								initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8, delay: index * 0.1 }}
								viewport={{ once: true }}
								className='space-y-2 group'
								whileHover={{ scale: 1.02 }}>
								<div className='flex justify-between items-center'>
									<div className='flex items-center space-x-3'>
										<motion.span
											className='text-2xl'
											animate={{ rotate: [0, 10, -10, 0] }}
											transition={{
												duration: 2,
												repeat: Number.POSITIVE_INFINITY,
												delay: index * 0.2,
											}}>
											{skill.icon}
										</motion.span>
										<span className='font-semibold'>{skill.name}</span>
									</div>
									<span className='text-purple-400 font-bold'>
										{skill.level}%
									</span>
								</div>
								<div className='w-full bg-gray-700 rounded-full h-3 relative overflow-hidden'>
									<motion.div
										initial={{ width: 0 }}
										whileInView={{ width: `${skill.level}%` }}
										transition={{
											duration: 1.5,
											delay: index * 0.1,
											ease: 'easeOut',
										}}
										viewport={{ once: true }}
										className='bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 h-3 rounded-full relative'>
										<motion.div
											className='absolute inset-0 bg-white/30 rounded-full'
											animate={{ x: ['-100%', '100%'] }}
											transition={{
												duration: 2,
												repeat: Number.POSITIVE_INFINITY,
												ease: 'linear',
											}}
										/>
									</motion.div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Enhanced Projects Section */}
			<section id='projects' className='py-20 px-6 relative'>
				<div className='max-w-6xl mx-auto'>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className='text-center mb-16'>
						<h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
							Featured Projects
						</h2>
					</motion.div>

					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{projects.map((project, index) => (
							<motion.div
								key={project.title}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								viewport={{ once: true }}
								whileHover={{ y: -10, scale: 1.02 }}
								className='group relative'>
								<motion.div
									className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 rounded-xl blur-xl transition-opacity duration-300`}
								/>
								<Card className='bg-white/5 border-white/10 backdrop-blur-lg overflow-hidden relative z-10'>
									<div className='relative overflow-hidden'>
										<motion.img
											src={project.image || '/placeholder.svg'}
											alt={project.title}
											className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110'
											whileHover={{ scale: 1.1 }}
										/>
										<motion.div
											className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'
											initial={{ opacity: 0 }}
											whileHover={{ opacity: 1 }}
										/>
										<motion.div
											className='absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
											initial={{ y: 20, opacity: 0 }}
											whileHover={{ y: 0, opacity: 1 }}>
											<motion.div
												whileHover={{ scale: 1.1 }}
												whileTap={{ scale: 0.9 }}>
												<Button
													size='sm'
													variant='secondary'
													className='backdrop-blur-lg'>
													<Github className='w-4 h-4' />
												</Button>
											</motion.div>
											<motion.div
												whileHover={{ scale: 1.1 }}
												whileTap={{ scale: 0.9 }}>
												<Button
													size='sm'
													variant='secondary'
													className='backdrop-blur-lg'>
													<ExternalLink className='w-4 h-4' />
												</Button>
											</motion.div>
										</motion.div>
									</div>
									<CardContent className='p-6'>
										<h3 className='text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors'>
											{project.title}
										</h3>
										<p className='text-gray-400 mb-4'>{project.description}</p>
										<div className='flex flex-wrap gap-2'>
											{project.tech.map((tech, techIndex) => (
												<motion.div
													key={tech}
													initial={{ opacity: 0, scale: 0.8 }}
													whileInView={{ opacity: 1, scale: 1 }}
													transition={{ delay: techIndex * 0.1 }}
													viewport={{ once: true }}
													whileHover={{ scale: 1.1 }}>
													<Badge
														variant='secondary'
														className='bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors'>
														{tech}
													</Badge>
												</motion.div>
											))}
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Enhanced Contact Section */}
			<section id='contact' className='py-20 px-6 bg-black/20 relative'>
				<div className='max-w-4xl mx-auto text-center'>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}>
						<h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
							Let's Work Together
						</h2>
						<p className='text-lg text-gray-300 mb-12 max-w-2xl mx-auto'>
							Ready to bring your ideas to life? Let's discuss your next project
							and create something amazing together.
						</p>

						<div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
							<motion.a
								href='/contact'
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}>
								<Button
									size='lg'
									className='bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 relative overflow-hidden group'>
									<motion.div
										className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent'
										initial={{ x: '-100%' }}
										whileHover={{ x: '100%' }}
										transition={{ duration: 0.5 }}
									/>
									<Mail className='w-5 h-5 mr-2 relative z-10' />
									<span className='relative z-10'>Get In Touch</span>
								</Button>
							</motion.a>
						</div>

						<div className='flex justify-center space-x-6'>
							{[
								{
									icon: Github,
									href: '#',
									label: 'GitHub',
									color: 'hover:text-gray-400',
								},
								{
									icon: Linkedin,
									href: '#',
									label: 'LinkedIn',
									color: 'hover:text-blue-400',
								},
								{
									icon: Mail,
									href: 'mailto:john@example.com',
									label: 'Email',
									color: 'hover:text-purple-400',
								},
							].map((social, index) => (
								<motion.a
									key={social.label}
									href={social.href}
									whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
									whileTap={{ scale: 0.9 }}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 }}
									viewport={{ once: true }}
									className={`p-3 bg-white/5 rounded-full border border-white/10 hover:bg-purple-500/20 transition-all duration-300 ${social.color} relative group`}>
									<motion.div className='absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
									<social.icon className='w-6 h-6 relative z-10' />
								</motion.a>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* Enhanced Footer */}
			<footer className='py-8 px-6 border-t border-white/10 relative'>
				<motion.div
					className='absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5'
					animate={{ opacity: [0.5, 1, 0.5] }}
					transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
				/>
				<div className='max-w-6xl mx-auto text-center text-gray-400 relative z-10'>
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}>
						&copy; 2024 Suraj Kr Mahato. All rights reserved. Made with{' '}
						<motion.span
							animate={{ scale: [1, 1.2, 1] }}
							transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
							className='text-red-400'>
							❤️
						</motion.span>{' '}
						and lots of coffee ☕
					</motion.p>
				</div>
			</footer>
		</div>
	);
}
