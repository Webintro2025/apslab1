// Import dynamic SEO metadata
export { generateMetadata } from './generateMetadata';

import ClientComponent from './ClientComponent';

export default function Page(props) {
  return <ClientComponent {...props} />;
}
