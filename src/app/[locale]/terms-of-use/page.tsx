import { termsOfUseContent } from '@/components/data/termsOfUseData';
import ServiceContainer from '@/components/ServiceContainer/ServiceContainer';

export default function TermsOfUsePage() {
  return <ServiceContainer data={termsOfUseContent} />;
}
