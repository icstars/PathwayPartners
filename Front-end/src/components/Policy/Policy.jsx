import React from 'react';
import './policy.css';
import benefitsImage from '../../assets/images/benefits.jpg';  // Using benefits.jpg
import BarNav from "../navbar/Navbar";


 

const Policy = () => {
    // <BarNav/>
    return (
        <div className='Policy'>
        <div className="policy-container">
        {/* <BarNav/> */}
            <h1>2025 Thresholds Benefits Summary</h1>  {/* Updated to 2025 */}
 
            {/* Section: Hero Image */}
            <div className="hero-image-container">
                <img src={benefitsImage} alt="Benefits Overview" className="hero-image" />
            </div>
 
            {/* Section 1: Overview of Benefits */}
            <section>
                <h2>Overview of Benefits</h2>
                <p>Thresholds provides a comprehensive benefits package designed to address the current and future needs of its employees.</p>
                <ul>
                    <li>Medical, Dental, and Vision Insurance</li>
                    <li>Life Insurance, Short & Long-Term Disability</li>
                    <li>Health Savings Account (HSA) & Flexible Spending Accounts (FSA)</li>
                    <li>403(b) Retirement Plan</li>
                    <li>Paid Time Off (Vacation, Sick Leave, Personal Days)</li>
                    <li>Employee Assistance Program (EAP)</li>
                </ul>
            </section>
 
            {/* Section 2: Benefits Comparisons */}
            <section>
                <h2>Benefits Comparison: HMO vs. PPO</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Benefit</th>
                            <th>HMO Plan</th>
                            <th>PPO Plan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Network Coverage</td>
                            <td>In-network only</td>
                            <td>In-network and out-of-network</td>
                        </tr>
                        <tr>
                            <td>Primary Care Physician (PCP) Required</td>
                            <td>Yes</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>Referrals for Specialists</td>
                            <td>Required</td>
                            <td>Not required</td>
                        </tr>
                        <tr>
                            <td>Annual Deductible</td>
                            <td>$250 individual / $500 family</td>
                            <td>$1,000 individual / $3,000 family</td>
                        </tr>
                        <tr>
                            <td>Out-of-Pocket Maximum</td>
                            <td>$1,500 individual / $3,000 family</td>
                            <td>$4,500 individual / $10,000 family</td>
                        </tr>
                    </tbody>
                </table>
            </section>
 
            {/* Section 3: FAQs */}
            <section>
                <h2>Frequently Asked Questions (FAQs)</h2>
                <h3>1. What is a qualifying life event?</h3>
                <p>A qualifying life event includes major changes such as marriage, birth, adoption, or changes in employment that allow you to modify your benefits outside of the open enrollment period.</p>
 
                <h3>2. How can I enroll in benefits?</h3>
                <p>You can enroll in benefits during the open enrollment period or within 31 days of a qualifying life event. For more information, contact the Benefits Team.</p>
 
                <h3>3. Can I change my coverage mid-year?</h3>
                <p>Yes, you can change your coverage if you experience a qualifying life event. Otherwise, changes are allowed during the annual open enrollment period.</p>
 
                <h3>4. What is the difference between an HSA and an FSA?</h3>
                <p>An HSA is a savings account available to those enrolled in a high-deductible health plan. The funds roll over each year. An FSA is a pre-tax savings account for medical expenses, but it has a "use-it-or-lose-it" rule.</p>
            </section>
 
            {/* Section 4: Download Link */}
            <section>
                <h2>Download the Full Benefits Document</h2>
                <p>For complete details about benefits, download the full document using the link below:</p>
                <a href="/2024 Thresholds Benefits Summary.pdf" download className="download-link">Download PDF</a>
            </section>
 
            {/* Section 5: Contact Information */}
            <section>
                <h2>Contact Information</h2>
                <p>If you have questions, reach out to the Benefits Team:</p>
                <ul>
                    <li>Email: <strong>benefits@thresholds.org</strong></li>
                    <li>Phone: <strong>773-572-5252</strong></li>
                    <li>Fax: <strong>773-537-3445</strong></li>
                </ul>
            </section>
        </div>
        </div>
    );
}
 
export default Policy;