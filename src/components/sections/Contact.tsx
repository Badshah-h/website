'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { designSystem, getSectionHeaderClasses } from '@/lib/design-system';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Building,
  User,
  Calendar,
  MessageSquare,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Form validation schema
const contactSchema = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  industry: z.string().min(1, 'Please select an industry'),
  contactName: z.string().min(2, 'Contact name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  projectDescription: z.string().min(10, 'Please provide a brief project description'),
  preferredDemoTime: z.string().min(1, 'Please select a preferred demo time'),
  consent: z.boolean().refine((val) => val === true, 'You must agree to be contacted'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real application, you would send this data to your backend
      console.log('Form submitted:', data);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const industries = [
    'Retail',
    'Finance',
    'Healthcare',
    'Real Estate',
    'Manufacturing',
    'Technology',
    'Government',
    'Education',
    'Other',
  ];

  const demoTimes = [
    'This Week',
    'Next Week',
    'Within 2 Weeks',
    'Within a Month',
    'Flexible',
  ];

  return (
    <section id="contact" className={`${designSystem.spacing.section} bg-white`}>
      <div className={`${designSystem.spacing.container} relative`}>
        {/* Section Header */}
        <motion.div
          className={getSectionHeaderClasses()}
          initial={designSystem.animations.fadeInUp.hidden}
          whileInView={designSystem.animations.fadeInUp.visible}
          transition={{ duration: designSystem.animations.duration.slow }}
          viewport={{ once: true }}
        >
          <h2 className={`${designSystem.typography.sectionTitle} mb-4`}>
            Get Started  
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent">  
              {' '}Today
            </span>
          </h2>
          <div className={`${designSystem.elements.sectionDivider} mb-6`} />
          <p className={`${designSystem.typography.sectionSubtitle} max-w-3xl mx-auto leading-relaxed`}>
            Ready to transform your enterprise operations? Contact our solutions experts 
            for a personalized consultation and custom demo tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={designSystem.animations.fadeInUp.hidden}
            whileInView={designSystem.animations.fadeInUp.visible}
            transition={{ duration: designSystem.animations.duration.slow }}
            viewport={{ once: true }}
          >
         
        
            <Card className="shadow-2xl border-0">
              <CardHeader className="bg-brand-gradient text-white rounded-t-lg">
                <CardTitle className={`${designSystem.typography.sectionTitle} text-2xl font-bold flex items-center`}>
                  <Send className="h-6 w-6 mr-3 text-white" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent">  
                    {' '}Request a Demo
                  </span>
                </CardTitle>
                <CardDescription className="text-brand-100">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-8">
                {isSubmitted ? (
                  <motion.div
                    className="text-center py-8"
                    initial={designSystem.animations.fadeInUp.hidden}
                    whileInView={designSystem.animations.fadeInUp.visible}
                    transition={{ duration: designSystem.animations.duration.slow }}
                    viewport={{ once: true }}
                  >
                 
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className={`${designSystem.typography.sectionTitle} mb-4`}>
                      Thank You!
                    </h3>
                    <p className={`${designSystem.typography.sectionSubtitle} text-muted leading-relaxed`}>
                      We've received your request and will contact you within 24 hours 
                      to schedule your personalized demo.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Company Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="companyName" className={`${designSystem.typography.sectionTitle} block text-sm font-medium text-brand-900 mb-2`}>
                          <Building className="h-4 w-4 inline mr-2" />
                          Company Name *
                        </label>
                        <Input
                          id="companyName"
                          {...register('companyName')}
                          className={errors.companyName ? 'border-red-500' : ''}
                          placeholder="Your Company Name"
                        />
                        {errors.companyName && (
                          <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="industry" className={`${designSystem.typography.sectionTitle} block text-sm font-medium text-brand-900 mb-2`}>
                          Industry *
                        </label>
                        <select
                          id="industry"
                          {...register('industry')}
                          className={`flex h-11 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 ${
                            errors.industry ? 'border-red-500' : ''
                          }`}
                        >
                          <option value="">Select Industry</option>
                          {industries.map((industry) => (
                            <option key={industry} value={industry}>
                              {industry}
                            </option>
                          ))}
                        </select>
                        {errors.industry && (
                          <p className="text-red-500 text-sm mt-1">{errors.industry.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                      <label htmlFor="contactName" className={`${designSystem.typography.sectionTitle} block text-sm font-medium text-brand-900 mb-2`}>
                        <User className="h-4 w-4 inline mr-2" />
                        Contact Name *
                      </label>
                      <Input
                        id="contactName"
                        {...register('contactName')}
                        className={errors.contactName ? 'border-red-500' : ''}
                        placeholder="Your Full Name"
                      />
                      {errors.contactName && (
                        <p className="text-red-500 text-sm mt-1">{errors.contactName.message}</p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className={`${designSystem.typography.sectionTitle} block text-sm font-medium text-brand-900 mb-2`}>
                          <Mail className="h-4 w-4 inline mr-2" />
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          {...register('email')}
                          className={errors.email ? 'border-red-500' : ''}
                          placeholder="you@company.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className={`${designSystem.typography.sectionTitle} block text-sm font-medium text-brand-900 mb-2`}>
                          <Phone className="h-4 w-4 inline mr-2" />
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          {...register('phone')}
                          className={errors.phone ? 'border-red-500' : ''}
                          placeholder="+1 (555) 123-4567"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <label htmlFor="projectDescription" className={`${designSystem.typography.sectionTitle} block text-sm font-medium text-brand-900 mb-2`}>
                        <MessageSquare className="h-4 w-4 inline mr-2" />
                        Brief Project Description *
                      </label>
                      <Textarea
                        id="projectDescription"
                        {...register('projectDescription')}
                        className={errors.projectDescription ? 'border-red-500' : ''}
                        placeholder="Tell us about your current challenges and what you're looking to achieve..."
                        rows={4}
                      />
                      {errors.projectDescription && (
                        <p className="text-red-500 text-sm mt-1">{errors.projectDescription.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="preferredDemoTime" className={`${designSystem.typography.sectionTitle} block text-sm font-medium text-brand-900 mb-2`}>
                        <Calendar className="h-4 w-4 inline mr-2" />
                        Preferred Demo Time *
                      </label>
                      <select
                        id="preferredDemoTime"
                        {...register('preferredDemoTime')}
                        className={`flex h-11 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 ${
                          errors.preferredDemoTime ? 'border-red-500' : ''
                        }`}
                      >
                        <option value="">Select Timeframe</option>
                        {demoTimes.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                      {errors.preferredDemoTime && (
                        <p className="text-red-500 text-sm mt-1">{errors.preferredDemoTime.message}</p>
                      )}
                    </div>

                    {/* Consent */}
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="consent"
                        {...register('consent')}
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500"
                      />
                      <label htmlFor="consent" className={`${designSystem.typography.sectionTitle} text-sm text-muted leading-relaxed`}>
                        I agree to be contacted by AxonStream Technologies regarding this inquiry. 
                        View our{' '}
                        <a href="/privacy" className="text-brand-500 hover:underline">
                          privacy policy
                        </a>
                        .
                      </label>
                    </div>
                    {errors.consent && (
                      <p className="text-red-500 text-sm">{errors.consent.message}</p>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      className="w-full shadow-xl"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Request Demo'}
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={designSystem.animations.fadeInUp.hidden}
            whileInView={designSystem.animations.fadeInUp.visible}
            transition={{ duration: designSystem.animations.duration.slow, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Direct Contact */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className={`${designSystem.typography.cardTitle} text-brand-900`}>
                  Get in Touch 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent">  
                    {' '}Directly
                  </span>
                </CardTitle>
                <CardDescription className={`${designSystem.typography.cardDescription}`}>
                  Prefer to speak with us directly? Here are multiple ways to reach our team.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-brand-500" />
                  </div>
                  <div>
                    <h4 className={`${designSystem.typography.cardTitle} text-brand-900`}>Email Us</h4>
                    <a
                      href="mailto:hello@axonstream.ai"
                      className="text-brand-500 hover:underline"
                    >
                      hello@axonstream.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-brand-500" />
                  </div>
                  <div>
                    <h4 className={`${designSystem.typography.cardTitle} text-brand-900`}>Call Us</h4>
                    <a
                      href="tel:+1-555-0123"
                      className="text-brand-500 hover:underline"
                    >
                      +1 (555) 0123
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-brand-500" />
                  </div>
                  <div>
                    <h4 className={`${designSystem.typography.cardTitle} text-brand-900`}>Visit Us</h4>
                    <p className="text-muted">
                      Dubai, UAE<br />
                      <span className="text-sm">By appointment only</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="shadow-lg bg-brand-gradient text-white">
              <CardHeader>
                <CardTitle className={`${designSystem.typography.cardTitle}`}>
                  Why Choose AxonStream?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-300 mt-0.5 flex-shrink-0" />
                  <p className="text-brand-100">
                    <strong className="text-white">Enterprise-Grade Security:</strong> SOC 2, ISO 27001 certified with comprehensive compliance frameworks.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-300 mt-0.5 flex-shrink-0" />
                  <p className="text-brand-100">
                    <strong className="text-white">24/7 Support:</strong> Dedicated technical teams with guaranteed SLA response times.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-300 mt-0.5 flex-shrink-0" />
                  <p className="text-brand-100">
                    <strong className="text-white">Proven Track Record:</strong> 200+ successful enterprise implementations across 15+ industries.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Response Time Guarantee */}
            <Card className="shadow-lg border-2 border-accent">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className={`${designSystem.typography.cardTitle} text-brand-900 mb-2`}>
                    24-Hour Response Guarantee
                  </h3>
                  <p className={`${designSystem.typography.cardDescription}`}>
                    We'll respond to your inquiry within 24 hours with a personalized consultation plan.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
