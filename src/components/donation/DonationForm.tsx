
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Download, Heart } from "lucide-react";

const donationFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  amount: z.string().min(1, {
    message: "Please enter a donation amount.",
  }),
  paymentMethod: z.enum(["credit", "debit", "upi"], {
    required_error: "Please select a payment method.",
  }),
});

type DonationFormValues = z.infer<typeof donationFormSchema>;

interface DonationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationForm = ({ isOpen, onClose }: DonationFormProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [donationData, setDonationData] = useState<DonationFormValues | null>(null);
  const [certificateUrl, setCertificateUrl] = useState("");
  
  const form = useForm<DonationFormValues>({
    resolver: zodResolver(donationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      amount: "",
      paymentMethod: "credit",
    },
  });

  const onSubmit = async (values: DonationFormValues) => {
    setIsProcessing(true);
    
    // Simulating payment processing delay
    setTimeout(() => {
      setIsProcessing(false);
      setDonationData(values);
      setShowCertificate(true);
      
      // Generate certificate URL
      const blob = generateCertificateBlob(values);
      const url = URL.createObjectURL(blob);
      setCertificateUrl(url);
      
      toast.success("Donation successful! Thank you for your generosity.");
    }, 1500);
  };

  const generateCertificateBlob = (data: DonationFormValues): Blob => {
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    const certificateHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Donation Certificate</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          .certificate {
            border: 20px solid #3b82f6;
            padding: 30px;
            position: relative;
            background-color: #fff;
            background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%233b82f6' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
          }
          .logo {
            text-align: center;
            margin-bottom: 20px;
          }
          h1 {
            color: #3b82f6;
            text-align: center;
            font-size: 28px;
            margin-bottom: 10px;
          }
          h2 {
            color: #3b82f6;
            text-align: center;
            font-size: 22px;
            margin-bottom: 30px;
          }
          .content {
            text-align: center;
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 30px;
          }
          .details {
            margin: 20px auto;
            width: 80%;
            border: 1px solid #ddd;
            padding: 15px;
            border-radius: 5px;
            background-color: #f9fafb;
          }
          .detail-row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px solid #eee;
          }
          .detail-row:last-child {
            border-bottom: none;
          }
          .seal {
            text-align: center;
            margin-top: 30px;
          }
          .signature {
            text-align: right;
            margin-top: 50px;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            font-size: 12px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="certificate">
          <div class="logo">
            <h1>Takshashil Foundation</h1>
          </div>
          
          <h2>Certificate of Donation</h2>
          
          <div class="content">
            This certificate acknowledges that <strong>${data.name}</strong> has generously contributed to the Takshashil Foundation, helping us empower communities through education and advance our mission of creating equal opportunities for all.
          </div>
          
          <div class="details">
            <div class="detail-row">
              <span>Donor Name:</span>
              <span><strong>${data.name}</strong></span>
            </div>
            <div class="detail-row">
              <span>Email:</span>
              <span>${data.email}</span>
            </div>
            <div class="detail-row">
              <span>Amount Donated:</span>
              <span><strong>₹${data.amount}</strong></span>
            </div>
            <div class="detail-row">
              <span>Date:</span>
              <span>${date}</span>
            </div>
            <div class="detail-row">
              <span>Certificate ID:</span>
              <span>TF-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</span>
            </div>
          </div>
          
          <div class="seal">
            <p style="color: #3b82f6; font-weight: bold; font-size: 18px;">❖ Thank You For Your Support ❖</p>
          </div>
          
          <div class="signature">
            <p>_______________________</p>
            <p>Authorized Signatory</p>
          </div>
          
          <div class="footer">
            <p>Takshashil Foundation • Empowering Communities Through Education</p>
            <p>This certificate is computer-generated and does not require a physical signature.</p>
          </div>
        </div>
      </body>
      </html>
    `;
    
    return new Blob([certificateHTML], { type: 'text/html' });
  };

  const handleDownloadCertificate = () => {
    const link = document.createElement('a');
    link.href = certificateUrl;
    link.download = `Takshashil_Donation_Certificate_${donationData?.name}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Certificate downloaded successfully!");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px]">
        {!showCertificate ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-takshashil-navy">
                <Heart className="inline-block mr-2 text-takshashil-blue" /> Support Our Mission
              </DialogTitle>
            </DialogHeader>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Donation Amount (₹)</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter amount" type="number" min="1" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="paymentMethod"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Payment Method</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="credit" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Credit Card
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="debit" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Debit Card
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="upi" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              UPI
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <DialogFooter className="pt-4">
                  <Button type="submit" className="w-full bg-takshashil-blue hover:bg-takshashil-darkBlue" disabled={isProcessing}>
                    {isProcessing ? "Processing..." : "Donate Now"}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-takshashil-navy">
                Thank You for Your Donation!
              </DialogTitle>
            </DialogHeader>
            
            <div className="flex flex-col items-center justify-center py-4">
              <div className="bg-takshashil-blue/10 rounded-lg p-6 text-center mb-6 w-full">
                <p className="text-lg mb-2">
                  <span className="font-semibold">Name:</span> {donationData?.name}
                </p>
                <p className="text-lg mb-2">
                  <span className="font-semibold">Amount:</span> ₹{donationData?.amount}
                </p>
                <p className="text-sm text-gray-600 mt-4">
                  Your generosity helps us empower communities through education.
                </p>
              </div>
              
              <Button
                onClick={handleDownloadCertificate}
                className="w-full bg-takshashil-blue hover:bg-takshashil-darkBlue"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Certificate
              </Button>
            </div>
            
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" onClick={onClose}>Close</Button>
              </DialogClose>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DonationForm;
