export type FileNode = {
  id: string;
  path: string;
  loc: number;
  functions: number;
  imports: string[];
};

export type Edge = {
  from: string;
  to: string;
};

export type Codebase = {
  files: FileNode[];
  edges: Edge[];
  generatedAt: string;
};
