import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger'],
    },
    styleType: {
      control: 'select',
      options: ['solid', 'ghost'],
    },
    shape: {
      control: 'select',
      options: ['default', 'circle'],
    },
    size: {
      control: 'select',
      options: ['sm', undefined, 'lg'],
    },
    iconPosition: {
      control: 'select',
      options: ['leading', 'trailing'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic button stories
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button CTA',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button CTA',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Button CTA',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Button CTA',
  },
};

// Ghost variants
export const PrimaryGhost: Story = {
  args: {
    variant: 'primary',
    styleType: 'ghost',
    children: 'Button CTA',
  },
};

export const SecondaryGhost: Story = {
  args: {
    variant: 'secondary',
    styleType: 'ghost',
    children: 'Button CTA',
  },
};

export const SuccessGhost: Story = {
  args: {
    variant: 'success',
    styleType: 'ghost',
    children: 'Button CTA',
  },
};

export const DangerGhost: Story = {
  args: {
    variant: 'danger',
    styleType: 'ghost',
    children: 'Button CTA',
  },
};

// Sizes
export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Small Button',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Large Button',
  },
};

// With icons
export const WithLeadingIcon: Story = {
  args: {
    variant: 'primary',
    icon: '●',
    iconPosition: 'leading',
    children: 'Button CTA',
  },
};

export const WithTrailingIcon: Story = {
  args: {
    variant: 'primary',
    icon: '+',
    iconPosition: 'trailing',
    children: 'Button CTA',
  },
};

// Circle buttons
export const CircleButton: Story = {
  args: {
    variant: 'primary',
    shape: 'circle',
    icon: '●',
    children: '',
  },
};

export const CircleButtonSmall: Story = {
  args: {
    variant: 'primary',
    shape: 'circle',
    size: 'sm',
    icon: '●',
    children: '',
  },
};

export const CircleButtonLarge: Story = {
  args: {
    variant: 'primary',
    shape: 'circle',
    size: 'lg',
    icon: '●',
    children: '',
  },
};

export const CircleButtonGhost: Story = {
  args: {
    variant: 'primary',
    shape: 'circle',
    styleType: 'ghost',
    icon: '○',
    children: '',
  },
};

// Disabled states
export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled Button',
  },
};

export const DisabledGhost: Story = {
  args: {
    variant: 'primary',
    styleType: 'ghost',
    disabled: true,
    children: 'Disabled Ghost',
  },
};