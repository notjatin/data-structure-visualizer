export interface SubStructureType {
  name: string;
  label: string;
  desc: string;
}

export interface StructureType {
  name: string;
  label: string;
  types: SubStructureType[];
  methods: string[];
  desc: string;
}