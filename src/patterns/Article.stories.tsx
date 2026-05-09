import type { Meta, StoryObj } from '@storybook/react-vite'
import { Article } from './Article'

const meta = {
  title: 'Patterns/Article',
  component: Article,
  args: {
    eyebrow: 'Web application',
    title: 'Developers Portal',
    summary: (
      <p>
        Built and maintained a product used to manage RCS and WhatsApp bots
        for launches, campaigns, and operational workflows.
      </p>
    ),
    sections: [
      {
        label: 'Contribution',
        content: (
          <p>
            Delivered product features under changing stakeholder requirements,
            implemented OAuth 1.0/2.0 flows, and developed analytics-oriented interfaces.
          </p>
        ),
      },
      {
        label: 'Result',
        content: (
          <p>
            Helped the product evolve quickly while keeping the frontend reliable,
            secure, and useful for day-to-day platform management.
          </p>
        ),
      },
    ],
    chips: [
      { id: 'react', label: 'React' },
      { id: 'oauth', label: 'OAuth' },
      { id: 'analytics', label: 'Analytics' },
    ],
    cta: <a href="#case-study" className="kz-article__cta-link">View case study</a>,
  },
} satisfies Meta<typeof Article>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
