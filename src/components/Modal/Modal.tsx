import React, { FC, memo, useCallback, useEffect, useRef } from 'react';

import classNames from 'classnames';
import cls from 'classnames';
import { useIntersectionObserver } from 'usehooks-ts';

import { ModalProps } from '@components/common/modals/Modal/types';
import { preventClosePreview } from '@contexts/MediaPreview/helpers';
import { useForceUpdate } from '@hooks/useForceUpdate';

import styles from './styles.module.scss';

const Modal: FC<ModalProps> = ({
  modalKey,
  header,
  footer,
  fabClasses,
  floatActionButton,
  children,
  permanentBottomShadow,
  onClose,
  contentClasses,
  onAfterClose,
  className,
  bottomShadow = true
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const intersectionRef = useRef<HTMLDivElement>(null);
  const io = useIntersectionObserver(intersectionRef, {});
  const { rerender } = useForceUpdate();

  const handleClose = useCallback(() => {
    onClose?.(modalKey);
  }, []);

  /* Needed to intersection observer first render recalculating */
  useEffect(() => {
    rerender();
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      modalRef.current?.classList.add('ReactModal__Content--after-open');
      backdropRef.current?.classList.add('ReactModal__Overlay--after-open');
    });

    return () => {
      onAfterClose?.();
    };
  }, []);

  // TODO: activate after fix closeLast() controller;
  // const handleCloseOnEscape = useCallback((event: globalThis.KeyboardEvent) => {
  //   if (event.key === 'Escape') {
  //     closeLast();
  //   }
  // }, []);
  //
  // useEventListener('keyup', handleCloseOnEscape);

  return (
    <div
      ref={backdropRef}
      id={modalKey}
      key={modalKey}
      onClick={handleClose}
      className={cls(styles.overlay, 'ReactModal__Overlay')}
    >
      <div ref={modalRef} onClick={preventClosePreview} className={cls(styles.modal, className, 'ReactModal__Content')}>
        {!!header && header}

        <div className={cls(styles.content, contentClasses)}>
          {children}
          {!!floatActionButton && (
            <div className={cls(styles.floatButtonContainer, fabClasses)}>{floatActionButton}</div>
          )}
        </div>

        {!!footer && footer}

        {bottomShadow && (
          <>
            <div style={{ height: '1px' }} ref={intersectionRef} />
            <div className={styles.bottomShadow}>
              <div
                className={classNames(styles.shadow, {
                  [styles.shadow_hide]: permanentBottomShadow ? false : io?.isIntersecting
                })}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default memo(Modal);
