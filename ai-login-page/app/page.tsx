'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, Github, Chrome } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen w-full bg-background overflow-hidden relative">
      {/* Animated gradient background with glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Purple glow orb top-right */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-purple-600/20 via-purple-500/10 to-transparent blur-3xl animate-pulse"></div>
        
        {/* Blue glow orb bottom-left */}
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-600/20 via-purple-500/10 to-transparent blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Subtle tech grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          className="w-full max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Brand Section */}
            <motion.div
              className="flex flex-col justify-center space-y-8"
              variants={itemVariants}
            >
              {/* Logo and Title */}
              <div className="floating">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-600/30">
                  <span className="text-2xl font-bold text-white">N</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-3 text-balance">
                  Neuron AI
                </h1>
                <p className="text-lg text-gray-400">
                  用 AI 打造未來
                </p>
              </div>

              {/* Features */}
              <div className="space-y-6">
                {[
                  {
                    icon: '⚡',
                    title: '極速推論',
                    description: '體驗超快速的 AI 推論效能',
                  },
                  {
                    icon: '🔐',
                    title: '企業級安全',
                    description: '銀行等級的資料安全防護',
                  },
                  {
                    icon: '🚀',
                    title: '無限擴展',
                    description: '即時處理數百萬筆請求',
                  },
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="flex gap-4 items-start"
                    variants={itemVariants}
                  >
                    <div className="text-2xl mt-1">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side - Login Form */}
            <motion.div
              className="flex items-center justify-center"
              variants={itemVariants}
            >
              <div className="w-full max-w-md">
                {/* Glass card */}
                <div className="relative group">
                  {/* Glow border effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 via-purple-500/20 to-blue-600/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>

                  {/* Card content */}
                  <div className="relative bg-card/80 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 shadow-2xl">
                    <motion.div
                      className="space-y-6"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {/* Header */}
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2">
                          歡迎回來
                        </h2>
                        <p className="text-sm text-gray-400">
                          登入您的 AI 平台
                        </p>
                      </div>

                      {/* Email Input */}
                      <motion.div className="space-y-2" variants={itemVariants}>
                        <Label
                          htmlFor="email"
                          className="text-sm font-medium text-gray-300"
                        >
                          電子郵件
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400/60 pointer-events-none" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-glow pl-10 bg-input border-purple-500/20 text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-purple-500/20"
                          />
                        </div>
                      </motion.div>

                      {/* Password Input */}
                      <motion.div className="space-y-2" variants={itemVariants}>
                        <Label
                          htmlFor="password"
                          className="text-sm font-medium text-gray-300"
                        >
                          密碼
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400/60 pointer-events-none" />
                          <Input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input-glow pl-10 pr-10 bg-input border-purple-500/20 text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-purple-500/20"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-400 transition-colors"
                          >
                            {showPassword ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </motion.div>

                      {/* Remember and Forgot */}
                      <motion.div
                        className="flex items-center justify-between"
                        variants={itemVariants}
                      >
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="remember"
                            checked={rememberMe}
                            onCheckedChange={(checked) =>
                              setRememberMe(checked as boolean)
                            }
                            className="border-purple-500/30 bg-purple-500/10"
                          />
                          <Label
                            htmlFor="remember"
                            className="text-sm text-gray-400 cursor-pointer"
                          >
                            記住我
                          </Label>
                        </div>
                        <a
                          href="#"
                          className="text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
                        >
                          忘記密碼？
                        </a>
                      </motion.div>

                      {/* Login Button */}
                      <motion.div variants={itemVariants}>
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold h-12 rounded-lg transition-all duration-300 shadow-lg shadow-purple-600/40 hover:shadow-purple-600/60">
                          登入
                        </Button>
                      </motion.div>

                      {/* Divider */}
                      <motion.div
                        className="relative"
                        variants={itemVariants}
                      >
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-purple-500/20"></div>
                        </div>
                        <div className="relative flex justify-center text-xs">
                          <span className="px-2 bg-card text-gray-400">
                            或使用以下方式繼續
                          </span>
                        </div>
                      </motion.div>

                      {/* Social Buttons */}
                      <motion.div className="space-y-3" variants={itemVariants}>
                        <Button
                          variant="outline"
                          className="w-full border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 text-gray-300 hover:text-white transition-all duration-300"
                        >
                          <Chrome className="w-5 h-5 mr-2" />
                          使用 Google 登入
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 text-gray-300 hover:text-white transition-all duration-300"
                        >
                          <Github className="w-5 h-5 mr-2" />
                          使用 GitHub 登入
                        </Button>
                      </motion.div>

                      {/* Sign up link */}
                      <motion.div
                        className="text-center text-sm text-gray-400"
                        variants={itemVariants}
                      >
                        還沒有帳號？{' '}
                        <a
                          href="#"
                          className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                        >
                          立即註冊
                        </a>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
