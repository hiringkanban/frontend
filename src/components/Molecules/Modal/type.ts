export interface ModalProps {
  id: string;
  open: boolean | string;
  title: string;
  okText?: string;
  width?: string;
  children: React.ReactNode;
  onOk?: () => void;
  onCancel?: () => void;
}
