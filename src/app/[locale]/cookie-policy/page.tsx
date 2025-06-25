import { cookiePolicyContent } from '@/components/data/cookiePolicyData';
import ServiceContainer from '@/components/ServiceContainer/ServiceContainer';

export default function CookiePolicyPage() {
  return <ServiceContainer data={cookiePolicyContent} />;
}
