import servicesData from '../../service.js';

// Dynamic SEO metadata for each product page
export function generateMetadata({ params }) {
	const { slug } = params;
	const product = servicesData.equipment_list.find(item => item.slug === slug);
	if (!product) {
		return {
			title: 'Product Not Found | APS Lab Instruments',
			description: 'This product does not exist.'
		};
	}
	// Prefer object description title, else use product.title
	const mainTitle = typeof product.description === 'object' && product.description.title
		? product.description.title
		: product.title.split(' – ')[0];
	const title = `${mainTitle} | ${product.title.split(' – ')[1] ? product.title.split(' – ')[1] + ' | ' : ''}APS Lab Instruments`;
	const description = `Buy ${mainTitle} from APS Lab Instruments. ${typeof product.description === 'string' ? product.description.substring(0, 150) : 'Best quality, reliable, and certified equipment for labs and hospitals.'}`;
	const keywords = `${mainTitle}, ${product.title}, APS Lab Instruments, Medical Equipment, Laboratory Equipment`;
	return {
		title,
		description,
		keywords,
		openGraph: {
			title,
			description,
			url: `https://apsinstrument.in/${slug}`,
			siteName: 'APS Lab',
			images: [
				{
					url: product.image || '/logo.png',
					width: 400,
					height: 200,
					alt: mainTitle,
				},
			],
			locale: 'en_IN',
			type: 'website',
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			site: '@apslab',
			images: [
				{
					url: product.image || '/logo.png',
					alt: mainTitle,
				},
			],
		},
	};
}
