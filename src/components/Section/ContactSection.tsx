import SectionLayout from '@/components/Section/SectionLayout';
import ContactForm from '../ui/contact-form';


function ContactSection() {
    return (
        <SectionLayout>
            <h2 className='font-bold md:text-5xl text-3xl'>Reach out to me</h2>
            <ContactForm />
        </SectionLayout>
    )
}

export default ContactSection
