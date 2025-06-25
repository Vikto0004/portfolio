import { privacyPolicyContent } from '@/components/data/privacyPolicyData';
import ServiceContainer from '@/components/ServiceContainer/ServiceContainer';

export default function PrivacyPolicyPage() {
  return <ServiceContainer data={privacyPolicyContent} />;
}
