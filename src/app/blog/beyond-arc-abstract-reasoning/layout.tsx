import { Metadata } from 'next';
import { metadata as pageMetadata } from './metadata';

export const metadata: Metadata = pageMetadata;

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 