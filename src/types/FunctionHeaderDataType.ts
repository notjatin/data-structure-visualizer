export interface Type {
  name: string;
  label: string;
}

export interface FunctionHeaderDataType {
  name: string;
  label: string;
  'has-types': boolean;
  types?: Type[];
  methods: string[]
}