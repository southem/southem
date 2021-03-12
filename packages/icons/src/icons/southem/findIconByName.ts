import { IconAlert } from './alert';
import { IconAlertRound } from './alert-round';
import { IconAlertTriangle } from './alert-triangle';
import { IconArrowDownStraight } from './arrow-down-straight';
import { IconArrowLeftStraight } from './arrow-left-straight';
import { IconArrowRightStraight } from './arrow-right-straight';
import { IconArrowUpStraight } from './arrow-up-straight';
import { IconAudio } from './audio';
import { IconCamera } from './camera';
import { IconCheckMark } from './checkmark';
import { IconChevronDownSingle } from './chevron-down-single';
import { IconChevronLeftSingle } from './chevron-left-single';
import { IconChevronRightSingle } from './chevron-right-single';
import { IconChevronUpSingle } from './chevron-up-single';
import { IconCreditCard } from './credit-card';
import { IconCross } from './cross';
import { IconDirectDebit } from './direct-debit';
import { IconDirectDebitWide } from './direct-debit-wide';
import { IconEnvelope } from './envelope';
import { IconExternal } from './external';
import { IconEye } from './eye';
import { IconEyeStrike } from './eye-strike';
import { IconFacebook } from './facebook';
import { IconHouse } from './house';
import { IconIndent } from './indent';
import { IconInfo } from './info';
import { IconMinus } from './minus';
import { IconPerson } from './person';
import { IconPayPal } from './paypal';
import { IconPlay } from './play';
import { IconPlus } from './plus';
import { IconQuote } from './quote';
import { IconSettings } from './settings';
import { IconSpeechBubble } from './speech-bubble';
import { IconStar } from './star';
import { IconTickRound } from './tick-round';
import { IconTwitter } from './twitter';
import { IconVideo } from './video';

type IconName =
  | 'alert'
  | 'alert-round'
  | 'alert-triangle'
  | 'arrow-down-straight'
  | 'arrow-left-straight'
  | 'arrow-right-straight'
  | 'arrow-up-straight'
  | 'audio'
  | 'camera'
  | 'checkmark'
  | 'chevron-down-single'
  | 'chevron-left-single'
  | 'chevron-right-single'
  | 'chevron-up-single'
  | 'credit-card'
  | 'cross'
  | 'direct-debit'
  | 'direct-debit-wide'
  | 'envelope'
  | 'external'
  | 'eye'
  | 'eye-strike'
  | 'facebook'
  | 'house'
  | 'indent'
  | 'info'
  | 'minus'
  | 'person'
  | 'paypal'
  | 'play'
  | 'plus'
  | 'quote'
  | 'settings'
  | 'speech-bubble'
  | 'star'
  | 'tick-round'
  | 'twitter'
  | 'video';

export const findIconByName = (name: IconName): any => {
  switch (name) {
    case 'alert':
      return IconAlert;
    case 'alert-round':
      return IconAlertRound;
    case 'alert-triangle':
      return IconAlertTriangle;
    case 'arrow-down-straight':
      return IconArrowDownStraight;
    case 'arrow-left-straight':
      return IconArrowLeftStraight;
    case 'arrow-right-straight':
      return IconArrowRightStraight;
    case 'arrow-up-straight':
      return IconArrowUpStraight;
    case 'audio':
      return IconAudio;
    case 'camera':
      return IconCamera;
    case 'checkmark':
      return IconCheckMark;
    case 'chevron-down-single':
      return IconChevronDownSingle;
    case 'chevron-left-single':
      return  IconChevronLeftSingle;
    case 'chevron-right-single':
      return IconChevronRightSingle;
    case 'chevron-up-single':
      return IconChevronUpSingle;
    case 'credit-card':
      return IconCreditCard;
    case 'cross':
      return IconCross;
    case 'direct-debit':
      return IconDirectDebit;
    case 'direct-debit-wide':
      return IconDirectDebitWide;
    case 'envelope':
      return IconEnvelope;
    case 'external':
      return IconExternal;
    case 'eye':
      return IconEye;
    case 'eye-strike':
      return IconEyeStrike;
    case 'facebook':
      return IconFacebook;
    case 'house':
      return IconHouse;
    case 'indent':
      return IconIndent;
    case 'info':
      return IconInfo;
    case 'minus':
      return IconMinus;
    case 'person':
      return IconPerson;
    case 'paypal':
      return IconPayPal;
    case 'play':
      return IconPlay;
    case 'plus':
      return IconPlus;
    case 'quote':
      return IconQuote;
    case 'settings':
      return IconSettings;
    case 'speech-bubble':
      return IconSpeechBubble;
    case 'star':
      return IconStar;
    case 'tick-round':
      return IconTickRound;
    case 'twitter':
      return IconTwitter;
    case 'video':
      return IconVideo;
  }
};
