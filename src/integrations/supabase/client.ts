// Stub Supabase client — Lovable Cloud not enabled in this preview project.
// The contact form falls back to a no-op insert so the UI still works visually.
export const supabase = {
  from(_table: string) {
    return {
      async insert(_payload: unknown) {
        console.warn("[stub supabase] insert called — Cloud not enabled");
        return { error: null as null | { message: string } };
      },
    };
  },
};
