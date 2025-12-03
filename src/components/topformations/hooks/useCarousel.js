// src/components/topformations/hooks/useCarousel.js
// No changes needed, as it's pure JS logic. Kept as is for same functionality.
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

/**
 * useCarousel
 * @param {object} options
 * @param {number} options.length - total number of items
 * @param {number} [options.pageSize=4] - number of items per page when paging
 * @param {number} [options.initialIndex=0] - starting index
 * @param {number} [options.step] - step size for next/prev (defaults to pageSize)
 * @param {boolean} [options.loop=false] - whether navigation should loop
 */
export default function useCarousel({ length = 0, pageSize = 4, initialIndex = 0, step, loop = false } = {}) {
  const safePageSize = Math.max(1, Math.floor(pageSize || 1));
  const stepSize = typeof step === 'number' ? Math.max(1, Math.floor(step)) : safePageSize;

  const [index, setIndex] = useState(() => Math.max(0, Math.min(initialIndex || 0, Math.max(0, length - 1))));
  const touchStartRef = useRef(0);
  const touchEndRef = useRef(0);
  const THRESHOLD = 50;

  // Keep index within bounds when length changes
  useEffect(() => {
    if (length <= 0) {
      setIndex(0);
      return;
    }
    setIndex((i) => Math.max(0, Math.min(i, Math.max(0, length - 1))));
  }, [length]);

  const canNext = useMemo(() => {
    if (length <= 0) return false;
    return loop || index + 1 <= length - 1;
  }, [index, length, loop]);

  const canPrev = useMemo(() => {
    if (length <= 0) return false;
    return loop || index - 1 >= 0;
  }, [index, length, loop]);

  const handleNext = useCallback(() => {
    setIndex((i) => {
      if (length <= 0) return 0;
      const next = i + stepSize;
      if (next <= length - 1) return next;
      return loop ? 0 : Math.min(length - 1, next);
    });
  }, [stepSize, length, loop]);

  const handlePrev = useCallback(() => {
    setIndex((i) => {
      if (length <= 0) return 0;
      const prev = i - stepSize;
      if (prev >= 0) return prev;
      return loop ? Math.max(0, length - stepSize) : 0;
    });
  }, [stepSize, length, loop]);

  const goto = useCallback((to) => {
    if (typeof to !== 'number' || length <= 0) return;
    const clamped = Math.max(0, Math.min(Math.floor(to), Math.max(0, length - 1)));
    setIndex(clamped);
  }, [length]);

  // Touch handlers for swipe gestures
  const onTouchStart = useCallback((e) => {
    touchStartRef.current = e.targetTouches?.[0]?.clientX || 0;
    touchEndRef.current = 0;
  }, []);

  const onTouchMove = useCallback((e) => {
    touchEndRef.current = e.targetTouches?.[0]?.clientX || 0;
  }, []);

  const onTouchEnd = useCallback(() => {
    const start = touchStartRef.current;
    const end = touchEndRef.current;
    if (!start || !end) return;
    const distance = start - end;
    if (distance > THRESHOLD) handleNext();
    if (distance < -THRESHOLD) handlePrev();
    touchStartRef.current = 0;
    touchEndRef.current = 0;
  }, [handleNext, handlePrev]);

  // Keyboard handler (left/right arrows)
  const onKeyDown = useCallback((e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    }
  }, [handleNext, handlePrev]);

  const page = useMemo(() => Math.floor(index / safePageSize), [index, safePageSize]);
  const pageCount = useMemo(() => Math.ceil(Math.max(0, length) / safePageSize), [length, safePageSize]);

  const visibleRange = useMemo(() => {
    const start = Math.floor(index / safePageSize) * safePageSize;
    const end = Math.min(start + safePageSize, length);
    return { start, end };
  }, [index, safePageSize, length]);

  return {
    index,
    setIndex: goto,
    goto,
    handleNext,
    handlePrev,
    canNext,
    canPrev,
    touchHandlers: { onTouchStart, onTouchMove, onTouchEnd },
    keyboardHandlers: { onKeyDown },
    visibleRange,
    page,
    pageCount,
  };
}