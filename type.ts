import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum PackageFeatures {
  WEBSITE = "Custom High-Performance Website",
  CHATBOT = "AI-Powered Customer Chatbot",
  AUTOMATION = "3 Custom AI Automation Workflows",
  SOCIAL = "Social Media Content Pack",
  VOICE = "Intelligent Voice Agent Deployment",
  SUPPORT = "6 Months Hands-on Support"
}