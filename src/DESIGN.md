---
name: Serene Liturgical Community
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#44474e'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#75777f'
  outline-variant: '#c5c6cf'
  surface-tint: '#4b5e84'
  primary: '#00102b'
  on-primary: '#ffffff'
  primary-container: '#0f2547'
  on-primary-container: '#798db5'
  inverse-primary: '#b3c7f1'
  secondary: '#904d00'
  on-secondary: '#ffffff'
  secondary-container: '#fe932c'
  on-secondary-container: '#663500'
  tertiary: '#00140b'
  on-tertiary: '#ffffff'
  tertiary-container: '#002c1b'
  on-tertiary-container: '#00a06f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#b3c7f1'
  on-primary-fixed: '#031b3d'
  on-primary-fixed-variant: '#33476b'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#ffb77d'
  on-secondary-fixed: '#2f1500'
  on-secondary-fixed-variant: '#6e3900'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 56px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 42px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 34px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 28px
  verse-callout:
    fontFamily: Noto Serif
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 36px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 17px
    fontWeight: '500'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-xxs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  gutter-mobile: 1rem
  gutter-desktop: 1.5rem
  container-max: 75rem
---

## Brand & Style

This design system embodies serene liturgical dignity married to clean, contemporary digital ergonomics. Designed specifically for modern Arabic-speaking church fellowships, study groups, and daily scripture quiz participants, the visual voice radiates spiritual warmth, reverent focus, and community hospitality.

### Visual Movement: Dignified Modernity with Warm Liturgical Light
The visual language merges **Contemporary Editorial Minimalism** with **Warm Spiritual Illumination**. Rather than leaning into dark, archaic ecclesiastical tropes, the aesthetic prioritizes radiant ivory surfaces, deep royal blue grounding, and sunlit amber-gold accents reminiscent of natural chapel daylight filtering through stained glass.

### Core Tenets
- **Reverent Clarity**: Content and scripture text reign supreme. Distraction-free reading, deliberate whitespace, and uncluttered layouts invite contemplation.
- **Warm Hospitality (مَحَبَّة وَشَرِكَة)**: Rounded micro-surfaces, soft radiant glows, and uplifting emerald highlights transform ritual study and quiz competition into an encouraging communal journey.
- **Authentic Arabic-First Flow**: Built from the ground up for right-to-left (RTL) reading geometry, ensuring natural typographic hierarchy, directional balance, and optical weight alignment.

## Colors

The palette balances the solemn authority of deep liturgical sapphire blues with the radiant warmth of sacred candlelight and living greenery.

### Palette Architecture
- **Primary — Royal Church Blue (`#0F2547`)**: Represents foundation, truth, and spiritual authority. Used for primary CTAs, primary headlines, top navigation headers, and focused states. Light variations (`#1E3A8A`, `#1E293B`) handle secondary structures and active item selections.
- **Secondary — Warm Altar Gold (`#D97706` / `#F59E0B` / `#FBBF24`)**: Symbolizes divine grace, revelation, wisdom, and celebration. Employed for scripture badges, active quiz streaks, celebration banners, and achievement awards.
- **Tertiary — Flourishing Olive Emerald (`#10B981`)**: Denotes spiritual life, growth, and righteous persistence. Reserved for correct quiz answers, verified user badges, and community contribution markers.
- **Neutral Backgrounds — Warm Ivory & Crisp Sanctuary White (`#FDFBF7`, `#F8FAFC`, `#FFFFFF`)**: Avoids cold, sterile grays in favor of an organic, parchment-inspired warmth that softens screen fatigue during extended Bible study sessions.
- **Text Tiers**:
  - Headings & Primary Text: `#0A192F` (Deep midnight navy)
  - Body & Verses: `#1E293B` (Balanced ink slate)
  - Secondary / Supporting Captions: `#64748B` (Neutral muted slate)

## Typography

Typography balances contemporary digital legibility with poetic, scriptural gravitas. For Arabic environments, system fallbacks and complementary Arabic font pairings (`Cairo`, `IBM Plex Sans Arabic`, and `Noto Naskh Arabic`) mirror the optical metrics specified below.

### Rules & Hierarchy
- **RTL Baseline Alignment**: Arabic text demands increased line-height relative to Latin glyphs to avoid clipping diacritics (تشكيل) and descending tails. All line-height values are calibrated 20–30% taller than conventional Western scales.
- **Verse Displays (`verse-callout`)**: Scripture passages, daily verses, and litanies utilize a refined Naskh-aligned serif rhythm (`Noto Serif` / `Noto Naskh`) with ample vertical breathing room (`36px` line-height on `20px` font size), evoking traditional illuminated manuscripts.
- **Body & Interactive Content**: `Plus Jakarta Sans` delivers open counters, high x-height, and optimistic clarity across quiz answers, forum discussions, and study summaries.

## Layout & Spacing

The layout is built on a responsive 12-column grid anchored within a maximum content container of `75rem` (1200px), designed to preserve optimal line lengths for reading scripture and focused comprehension during timed quizzes.

### RTL Flow & Structural Adaptations
- **Directionality**: Default reading and visual flow begins on the right edge. Interactive progress bars, icons, forward chevrons, and timeline indicators flip horizontally.
- **Mobile (Viewport < 768px)**: 4-column layout, `1rem` edge margins, full-width touch targets for quiz options, and floating bottom navigation for church bulletins, daily challenges, and prayer lists.
- **Tablet (768px – 1024px)**: 8-column layout, `1.5rem` margins, dual-pane layout for reading chapter text alongside quiz reflections.
- **Desktop (> 1024px)**: 12-column layout with asymmetrical zoning: 3-column sticky sidebar (navigation & daily prayer streak tracker), 6-column primary study stream / quiz arena, and 3-column communal leaderboard and parish announcements.

## Elevation & Depth

Visual depth avoids cold, heavy drop shadows, instead utilizing layered warmth and subtle ambient daylight diffusion.

### Elevation Levels
- **Tier 0 (Surface Base)**: Warm canvas (`#FDFBF7` or `#F8FAFC`). Flat, restful foundation.
- **Tier 1 (Cards & Tile Surfaces)**: Pure white `#FFFFFF` with an ultralight rim border (`1px solid rgba(15, 37, 71, 0.06)`) and a diffused warm shadow: `0 2px 8px -2px rgba(15, 37, 71, 0.04), 0 1px 3px 0 rgba(217, 119, 6, 0.02)`.
- **Tier 2 (Interactive Floating Elements & Active Quizzes)**: Raised surface with ambient golden depth: `0 8px 24px -6px rgba(15, 37, 71, 0.08), 0 4px 12px -2px rgba(245, 158, 11, 0.06)`. Used for active question cards and modal dialogs.
- **Tier 3 (Sacred Highlights & Overlays)**: Glassmorphic parchment headers and sticky banners featuring `rgba(255, 255, 255, 0.88)` with `backdrop-filter: blur(12px)` and a golden hairline bottom border (`rgba(217, 119, 6, 0.15)`).

## Shapes

The design system employs **Level 2 (Rounded)** architecture. Surfaces balance approachable softness with church-like architectural structure.

### Geometry Specifications
- **Standard UI Cards & Form Controls**: `0.75rem` (12px) to `1rem` (16px) corner radius, delivering an inviting, friendly touch suitable for youth groups while maintaining architectural order.
- **Badges, Tags, & Verse Chips**: Fully pill-shaped (`9999px`) to emphasize fluidity, spiritual tokens, and achievement medallions.
- **Subtle Motifs**: Decorative dividers, frame highlights, and empty-state graphics incorporate stylized, balanced cross silhouettes (الصليب المفرغ الهادئ) and gentle ecclesiastical arch bevels (`border-top-left-radius: 2rem; border-top-right-radius: 2rem`) for devotional verse headers.

## Components

### 1. Buttons
- **Primary (Action & Submit Quiz)**: Royal church blue background (`#0F2547`), high-contrast white label, subtle inner glow. Hover transitions to `#1E3A8A` with a gentle lift.
- **Secondary (Reflection & Details)**: Warm parchment fill (`#FEF3C7` / 40%), amber-gold text (`#B45309`), gold hairline border (`rgba(217, 119, 6, 0.3)`).
- **Ghost / Liturgical Link**: Deep blue text, zero background, gold underline highlight on focus.

### 2. Scripture Verse & Study Cards
- Crisp white ground with a warm amber right-side liturgical accent bar (`4px` solid `#D97706`).
- Verse text formatted in classical serif hierarchy with prominent quotation styling.
- Bottom meta strip includes chapter-and-verse chip, copy button, and devotional audio trigger.

### 3. Bible Quiz & Option Items
- **Default State**: White surface, slate border (`#E2E8F0`), deep blue Arabic option marker (أ، ب، ج، د) enclosed in a soft circular badge.
- **Selected State**: Light blue-tinted background (`#EFF6FF`), royal blue border (`#1E3A8A`), high-contrast text.
- **Correct State**: Soft mint glow (`#ECFDF5`), vibrant emerald border (`#10B981`), white checkmark icon.
- **Incorrect State**: Muted rose background (`#FFF1F2`), soft crimson border (`#F43F5E`), gentle feedback indicator.

### 4. Badges & Youth Rank Chips (المخدومين)
- **Daily Streak Pill**: Amber background (`#FEF3C7`), gold flame icon, `#92400E` numeric typography.
- **Study Tier Tag**: Emerald background (`#D1FAE5`), emerald text (`#065F46`), designating spiritual milestones (حافظ الكلمة، تلميذ أمين).

### 5. Input Fields & Form Controls
- Inputs use warm ivory-tinted backgrounds (`#FAFAFA`) transitioning to `#FFFFFF` on active focus with a 2px royal blue ring (`rgba(15, 37, 71, 0.15)`).
- Checkboxes and radio buttons feature smooth pill and circular geometry with emerald check fills for biblical affirmations and attendance roll calls.