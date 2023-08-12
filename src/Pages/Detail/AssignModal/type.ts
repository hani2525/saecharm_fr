export type MemoDataType = {
  responsibility: string;
  timeStamp: string;
  content?: string;
};

export type CreateMemoDataType = {
  writer_id?: number;
  target_id: number;
  content?: string;
};
