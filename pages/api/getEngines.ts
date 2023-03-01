import openai from '../../lib/chatgpt';
import type { NextApiRequest, NextApiResponse } from 'next';

type Option = {
  value: string;
  label: string;
};

type Data = {
  modelOptions: Option[];
};

export default async function handler();
