import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const send = mutation({
  args: { body: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthenticated call to mutation");
    }
    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier),
      )
      .unique();
    if (!user) {
      throw new Error("Unauthenticated call to mutation");
    }
    await ctx.db.insert("messages", { body: args.body, user: user._id });
  },
});


export const list = query({
  args: {},
  handler: async (ctx, args) => {
    const messages = await ctx.db.query("messages").collect()
  
 return Promise.all(
  messages.map(async (message) => {
    const user = await ctx.db.get(message.user);
    return{
      author: user?.name,
      ...message
    }
  })

 )
}
})