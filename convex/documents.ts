import { mutation, query } from "./_generated/server";
import { v } from "convex/values";


export const getDocuments = query({
    async handler(ctx) {
        return ctx.db.query("documents").collect();
    }
})

export const createDocuments = mutation({
  args: {
    title: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("documents", { title: args.title });
  },
});
