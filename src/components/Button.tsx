import React from 'react';
import { Button as BootstrapButton, ButtonProps as BootstrapButtonProps } from 'react-bootstrap';

export interface ButtonProps extends Omit<BootstrapButtonProps, 'variant'> {
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  /** Button style type */
  styleType?: 'solid' | 'ghost';
  /** Button shape */
  shape?: 'default' | 'circle';
  /** Icon position */
  iconPosition?: 'leading' | 'trailing';
  /** Icon element */
  icon?: React.ReactNode;
  /** Button text */
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  styleType = 'solid',
  shape = 'default',
  iconPosition = 'leading',
  icon,
  children,
  className = '',
  ...props
}) => {
  const getClassName = () => {
    let classes = className;
    
    if (styleType === 'ghost') {
      classes += ' btn-ghost';
    }
    
    if (shape === 'circle') {
      classes += ' btn-circle';
    }
    
    return classes.trim();
  };

  const renderContent = () => {
    if (shape === 'circle') {
      return icon || children;
    }

    if (icon && iconPosition === 'leading') {
      return (
        <>
          <span className="btn-icon btn-icon-leading">{icon}</span>
          {children}
        </>
      );
    }

    if (icon && iconPosition === 'trailing') {
      return (
        <>
          {children}
          <span className="btn-icon btn-icon-trailing">{icon}</span>
        </>
      );
    }

    return children;
  };

  return (
    <BootstrapButton
      variant={variant}
      className={getClassName()}
      {...props}
    >
      {renderContent()}
    </BootstrapButton>
  );
};